// @flow
import {
  LIST_BOARD,
  ADD_ITEM
} from '../actions/home';
import type {
  Action
} from './types';

import type {
  Item
} from '../utils/Database';


type HomeState = {
  backlog: Item[],
  planning: Item[],
  progress: Item[],
  done: Item[]
}

const initialState = {
  backlog: [],
  planning: [],
  progress: [],
  done: []
}


export default function home(state: HomeState = initialState, action: Action) {
  switch (action.type) {
    case LIST_BOARD:
      return {
        ...state,
        backlog: action.backlog,
        planning: action.planning,
        progress: action.progress,
        done: action.done
      };
    case ADD_ITEM:
      state.backlog.push(action.item)
      return state;
    default:
      return state;
  }
}
