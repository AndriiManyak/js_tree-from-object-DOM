'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const uList = document.createElement('ul');

  for (const key in data) {
    const list = document.createElement('li');
    const nextList = data[key];

    list.textContent = key;
    uList.append(list);

    if (Object.keys(nextList).length) {
      createTree(list, nextList);
    }
  }

  element.append(uList);
}

createTree(tree, food);
