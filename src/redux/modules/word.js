// word.js

// Actions

const CREATE = 'word/CREATE';
//const UPDATE = 'my-app/widgets/UPDATE';
//const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
  list: [
    { 단어들 : 'apple', 뜻 : '사과', 응용영어 : 'I like apple', 응용한글 : '난 사과를 좋아한다'},
    { 단어들 : 'bear', 뜻 : '곰', 응용영어 : 'bear is cute', 응용한글 : '곰은 귀엽다'},
    { 단어들 : 'tomato', 뜻 : '토마토', 응용영어 : 'tomato nomat', 응용한글 : '토마토 노맛'},
    { 단어들 : 'banana', 뜻 : '바나나', 응용영어 : 'banana ggulmat', 응용한글 : '바나나 꿀맛'}
  ]
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
    const new_word_list = [...state.단어, action.word];
    return { list : new_word_list };
  }
// do reducer stuff
default: return state;
}
}