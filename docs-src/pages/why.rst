Why?
====

Why haven't I writen a library in any language or made domain specific language
(like LOGO_ language) to make simple fractals?

Because I'm in love in many variatons of symbols and ancient manuscripts.
I love mathematican symbols too - many equations is very hard to write as poetic poem.
I think without simple symbols and simpler syntax in math formulas it wouldn't possible
to make advanced equations. In other scientific/enginneering branches it would be
too hard to make something without symbols.

.. figure:: images/medieval.png
  :alt: medieval notations
  :align: center

  `Medieval formulas`_ in the text was a little *"too big"*.

.. figure:: images/circuit-diagram.png
  :alt: circuit diagram
  :align: center

  Each `Circuit Diagrams`_ have a many symbols. I can't imagine how would be work without diagrams.

.. figure:: images/road_sign.jpg
  :alt: road sign in poland
  :align: center

  `Road sign`_ is a code for drivers. This sign means *"no entry in both ways"*.

So I thinking about to make "language" to draw simple and little advanced figures and fractals with symbols.
But not a typical *computer language* - this lang have custom symbols (*tokens*)
and splitted by staves (similar to computer functions / procedures).
Each symbol try to avoid common mathematical symbols
(but it was too hard to achieve that - some tokens have mathematical symbols like :tut:token:`CALL_F`)
and arabic numerals (roman numerals is still in my heart :code:`<3`).
I wish to make language with "senteces" (in e.g. :tut:token:`DRAW_CIRCLE` :tut:token:`COUNT_5`
:tut:token:`DRAW_LINE` :tut:token:`COUNT_2` means *Draw circle of size 5 units and after that
draw line of width 2 units* - did you notice difference of size between text and tokens?).

But symbols can be very unclear if reader is not familiar with specific set of symbols.
It's very nice if somebody know that, but most people don't know specific languages.
To achieve that, then need a documentation, courses or worse - scientific degree
(let him who doesn't fail the exam of derivations cast the first :math:`e` constant)!

Second disadvantage is limited number of symbols - many languages (natural and computer)
have advanced grammar (`Chomsky hierarchy`_) and `morphology`_ to describe
(almost) any situation. My language unfortunately don't have advanced grammar
and have small set of symbols - because I think it would be too difficult
to remember bigger constructs in this language. I suppose, for now is enough
to make a very fancy fractals.

.. figure:: images/heisenberg.svg
  :alt: heisenberg picture
  :align: center

  `Heisenberg equation`_ is only understand only for people which
  know advanced mathematic and quantum mechanics.
  For mortals looks like a black magic spell.

.. figure:: images/mensural_notation.jpg
  :alt: mensural notation
  :align: center

  `Mensural notation`_ from 16th-century - If you aren't similar with music notation
  then this manuscript would be unreadable.

It's very similar situations in computer languages. Symbols contra keywords:

.. figure:: images/cobol.png
  :alt: cobol
  :align: center

  Cobol_ have tried to be english-friendly language.

.. figure:: images/APLSC_matrix.jpg
  :alt: APL
  :align: center

  APL_ has many symbols - only who knew these all symbols and gramar can write programs in APL language.

.. figure:: images/game_maker.png
  :alt: game maker
  :align: center

  `Game Maker`_ in early versions has tokens too. It was very nice to learn programming
  computer games but not enough to make a bigger game.

.. _Circuit diagrams: https://en.wikipedia.org/wiki/Circuit_diagram
.. _Cobol: https://en.wikipedia.org/wiki/COBOL
.. _Road sign: https://en.wikipedia.org/wiki/Road_signs_in_Poland#/media/File:Zakaz_wjazdu_-_nie_dotyczy_rower??w.JPG
.. _APL: https://computerhistory.org/blog/the-apl-programming-language-source-code/
.. _Game Maker: http://www.multiwingspan.co.uk/old/gm/tutorials/breakout/br5.htm
.. _Medieval formulas: https://www.researchgate.net/publication/266977181_Polynomials_and_equations_in_medieval_Italian_algebra
.. _Heisenberg equation: https://en.wikipedia.org/wiki/Heisenberg_picture
.. _LOGO: https://en.wikipedia.org/wiki/Logo_(programming_language)
.. _Mensural notation: https://en.wikipedia.org/wiki/Mensural_notation#/media/File:Barbireau_illum.jpg
.. _Chomsky hierarchy: https://en.wikipedia.org/wiki/Chomsky_hierarchy
.. _morphology: https://en.wikipedia.org/wiki/Morphology_(linguistics)#Examples
