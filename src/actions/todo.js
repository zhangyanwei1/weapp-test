import {
  ADD_TODO,
  CHECK_TODO,
  DEL_TODO
} from '../constants/todo'

export const add = (data) => {
  return {
    type: ADD_TODO,
    data,
  }
}

export const checked = (data) => {
  return {
    type: CHECK_TODO,
    data,
  }
}

export const del = (data) => {
  return {
    type: DEL_TODO,
    data,
  }
}
