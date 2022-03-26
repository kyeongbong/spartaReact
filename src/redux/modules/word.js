// word.js

// Actions
// const LOAD = "word/LOAD";
const CREATE = 'word/CREATE';
//const UPDATE = 'my-app/widgets/UPDATE';
//const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
  list : [
    (['apple', '사과', '냠냠', '꿀꺽']),
    (['apple', '사과', '냠냠', 'dndpr'])
  ]
}


// Action Creators
// export const loadword = (word) => {
//   return { type: LOAD, word };
// };

export function createword(word) {
  return {type: CREATE, word: word, };
}

// export const createword = (word) => {
//   return { type: CREATE, word };
// };

//export function updateWidget(widget) {
// return { type: UPDATE, widget };
//}

//export function removeWidget(widget) {
//  return { type: REMOVE, widget };
//}

// Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff

    case "word/CREATE":
      {const new_word_list = [...state.list, action.word];
      return { list: new_word_list };}

    default:
      return state;
  }
}



// export  function reducer(state = initialState, action = [{}]) {
// switch (action.type) {
//   case "word/CREATE": {
//     const new_word_list = [...state.단어, action.word];
//     return { list : new_word_list };
//   }
// // do reducer stuff
// default: return state;
// }
// }