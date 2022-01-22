import { v4 as uuid4 } from 'uuid';

export function renderToken(token: string, isTemplate: boolean = false): Element {
    const node = document.createElement('span');
    node.classList.add('token');
    node.setAttribute('draggable', 'true');
    node.id = `token-${uuid4()}`;
    node.dataset.token = token;
    node.dataset.isTemplate = isTemplate ? 'yes' : 'no';
    //node.innerText = token;
    node.style.backgroundImage = `url(/icons/${token}.svg)`;
    setTokenEvents(node);
    return node;
}

function setTokenEvents(node: Element) {
    node.addEventListener('dragstart', evDragStart, false);
    node.addEventListener('dragend', evDragEnd, false);

    function evDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('token', this.dataset.token);
        e.dataTransfer.setData('id', this.id);
    }

    function evDragEnd(e) {
        /*
        this.parentElement.querySelectorAll('.token').forEach(function (item) {
          item.classList.remove('over');
        });
        */
    }
}

interface TokenInfo {
    name: string;
    label: string;
    type: 'action' | 'value';
    doc?: string;
};

interface TokenCategory {
    label: string;
    tokens: TokenInfo[];
};

const TOKENS: TokenCategory[] = [
    {
        label: 'Counters',
        tokens: [
            {name: 'COUNT_1', label: 'One', type: 'value'},
            {name: 'COUNT_2', label: 'Two', type: 'value'},
            {name: 'COUNT_3', label: 'Three', type: 'value'},
            {name: 'COUNT_5', label: 'Five', type: 'value'},
        ],
    },
    {
        label: 'Fractions',
        tokens: [
            {name: 'FRACT_1_2', label: 'Half', type: 'value'},
            {name: 'FRACT_1_3', label: 'Third', type: 'value'},
            {name: 'FRACT_2_3', label: 'Two thirds', type: 'value'},
            {name: 'FRACT_1_4', label: 'Quarter', type: 'value'},
            {name: 'FRACT_3_4', label: 'Three quarters', type: 'value'},
            {name: 'FRACT_1_5', label: 'Fifth', type: 'value'},
        ],
    },
    {
        label: 'Angles',
        tokens: [
            {name: 'ANGLE_270', label: '270°', type: 'value'},
            {name: 'ANGLE_180', label: '180°', type: 'value'},
            {name: 'ANGLE_90', label: '90°', type: 'value'},
            {name: 'ANGLE_60', label: '60°', type: 'value'},
            {name: 'ANGLE_45', label: '45°', type: 'value'},
            {name: 'ANGLE_30', label: '30°', type: 'value'},
            {name: 'ANGLE_15', label: '15°', type: 'value'},
        ],
    },
    {
        label: 'Functions',
        tokens: [
            {name: 'ARGUMENT', label: 'Argument', type: 'value'},
            {name: 'CALL_F', label: 'Call F function', type: 'action'},
            {name: 'CALL_G', label: 'Call G function', type: 'action'},
            {name: 'CALL_H', label: 'Call H function', type: 'action'},
        ],
    },
    {
        label: 'Painters',
        tokens: [
            {name: 'DRAW_LINE', label: 'Draw Line', type: 'action'},
            {name: 'DRAW_CIRCLE', label: 'Draw Circle', type: 'action'},
        ],
    },
    {
        label: 'Cursor',
        tokens: [
            {name: 'FORWARD', label: 'Move forward', type: 'action'},
            {name: 'ROTATE_LEFT', label: 'Rotate left', type: 'action'},
            {name: 'ROTATE_RIGHT', label: 'Rotate right', type: 'action'},
            {name: 'REVERSE', label: 'Reverse', type: 'action'},
            {name: 'REPLAY', label: 'Replay', type: 'action'},
        ],
    },
];

export function renderTokens(isTemplate: boolean = true) {
    const container = document.getElementById('tokens');
    container.innerHTML = '';
    TOKENS.forEach(category => {
        const categoryNode = document.createElement('div');
        categoryNode.classList.add('tokens', 'hide');

        const categoryNodeName = document.createElement('span');
        categoryNodeName.classList.add('label');
        categoryNodeName.innerText = category.label;
        categoryNodeName.addEventListener('click', () => {
            categoryNode.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);

        category.tokens.forEach(tokenInfo => {
            categoryNode.appendChild(renderToken(tokenInfo.name, isTemplate));
        });

        container.appendChild(categoryNode);
    });
}
