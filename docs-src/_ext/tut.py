from collections import defaultdict
from dataclasses import dataclass
from uuid import uuid4
from urllib.parse import quote
from html import escape
import re

from docutils.parsers.rst import Directive, directives
from docutils import nodes as docutils_nodes

from sphinx import addnodes
from sphinx.directives import ObjectDescription
from sphinx.domains import Domain, Index
from sphinx.roles import XRefRole
from sphinx.util.nodes import make_refnode


def token_role(name, rawtext, text, lineno, inliner, options=None, content=None):
    node = docutils_nodes.image(
        uri=f"/icons/{text}.svg",
        name=text,
        alt=text,
        classes=["fract-token", "token-inline"],
    )
    return [node], []


class AnimationDirective(Directive):
    optional_arguments = 1
    final_argument_whitespace = True
    has_content = True
    option_spec = {
        'staves': directives.unchanged_required,
        'iterations': directives.unchanged_required,
        'start': directives.unchanged_required,
    }

    def run(self):
        staves = self.options['staves'].split()
        tokens = list(self.content)
        iterations = int(self.options['iterations'])
        start = int(self.options['start'])
        node_id = self.make_node_id()
        title = escape(self.arguments[0].strip() if self.arguments else "")
        code = '\n'.join([
            f"<div id='{node_id}'></div>",
            "<script>",
            "TUT.makeAnimation({",
            f"  staves: {staves},",
            f"  iterations: {iterations},",
            f"  start: {start},",
            f"  tokens: {tokens},",
            f"  nodeId: '{node_id}',",
            f"  title: '{title}',",
            "});",
            "</script>",
        ])
        raw_node = docutils_nodes.raw(format="html", text=code)
        return [raw_node]

    def make_node_id(self):
        if self.arguments:
            node_id = quote(re.sub("\s+", "-", self.arguments[0])).lower()
        else:
            node_id = uuid4().hex
        return f"animation-{node_id}"


class TokenDirective(ObjectDescription):
    has_content = True
    final_argument_whitespace = True
    required_arguments = 1
    option_spec = {
        'title': directives.unchanged_required,
    }

    def handle_signature(self, sig, signode):
        signode += docutils_nodes.image(
            uri=f"/icons/{sig}.svg",
            name=sig,
            alt=sig,
            classes=["fract-token", "token-header"],
        )
        signode += addnodes.desc_name(text=self.options['title'])
        return sig

    def add_target_and_index(self, name_cls, sig, signode):
        return
        signode['ids'].append('recipe' + '-' + sig)
        if 'contains' in self.options:
            ingredients = [
                x.strip() for x in self.options.get('contains').split(',')]

            recipes = self.env.get_domain('tut')
            recipes.add_recipe(sig, ingredients)


@dataclass
class AnimationObj:
    name: str
    dispname: str
    docname: str
    anchor: str
    type: str
    priority: int


class AnimationIndex(Index):
    name = 'animation'
    localname = 'Animation Index'
    shortname = 'Animation'

    def generate(self, docnames=None):
        content = defaultdict(list)
        animations = self.domain.get_animations()
        animations = sorted(animations, key=lambda o: o.name)

        for obj in animations:
            key = dispname.name.lower()
            # name, subtype, docname, anchor, extra, qualifier, description
            row = (obj.dispname, 0, obj.docname, obj.anchor, obj.docname, '', obj.type)
            content[key].append(row)

        # convert the dict to the sorted list of tuples expected
        content = sorted(content.items())

        return content, True


class TutDomain(Domain):
    name = 'tut'
    label = 'Tutorial'
    roles = {
        'ref': XRefRole(),
        'token': token_role,
    }
    directives = {
        'animation': AnimationDirective,
        'token': TokenDirective,
    }
    indices = {
        AnimationIndex,
    }
    initial_data = {
        'animations': [],
    }

    def get_full_qualified_name(self, node):
        return '{}.{}'.format('animation', node.arguments[0])

    def get_animations(self):
        yield from self.data['animations']

    def resolve_xref(self, env, fromdocname, builder, typ, target, node, contnode):
        match_gen = (
            (obj.docname, obj.anchor)
            for obj in self.get_animations()
            if sig == target
        )
        match = next(match_gen, None)
        if match is None:
            return None
        todocname, targ = match
        return make_refnode(builder, fromdocname, todocname, targ, contnode, targ)

    def add_animation(self, signature, ingredients):
        obj = AnimationObj(
            name=f'animation.{signature}',
            dispname=signature,
            type='Animation',
            docname=self.env.docname,
            anchor=f'recipe-{signature}',
            priority=0,
        )
        self.data['animations'].append(obj)


def setup(app):
    app.add_domain(TutDomain)

    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
