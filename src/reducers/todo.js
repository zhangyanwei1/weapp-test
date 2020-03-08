import { ADD_TODO, CHECK_TODO, DEL_TODO } from '../constants/todo'

const INITIAL_STATE = {
  todoList: [
    {text: '学习小程序框架', checked: true}
  ]
}

export default function counter (state = INITIAL_STATE, action) {
  const todoList = state.todoList.slice();
  switch (action.type) {
    case ADD_TODO:
      todoList.push({text: action.data, checked: false});
      return {
        ...state,
        todoList,
      }
     case CHECK_TODO:
       todoList[action.data].checked = !todoList[action.data].checked;
       return {
         ...state,
         todoList,
       }
      case DEL_TODO:
        todoList.splice(action.data, 1);
        return {
          ...state,
          todoList,
        }
     default:
       return state
  }
}
