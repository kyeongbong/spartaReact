// word.js

// Actions

const CREATE = 'word/CREATE';
//const UPDATE = 'my-app/widgets/UPDATE';
//const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
  list: []
}

// Action Creators
export function createword(word) {
  return {type: CREATE, word: word};
}

//export function updateWidget(widget) {
// return { type: UPDATE, widget };
//}

//export function removeWidget(widget) {
//  return { type: REMOVE, widget };
//}

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
  case "word/CREATE": {
    return {};
  }
// do reducer stuff
default: return state;
}
}