// @flow
import type { GetState, Dispatch } from '../reducers/types';
import type { Item } from '../utils/Database';

export const LIST_BOARD = 'LIST_BOARD';
export const ADD_ITEM = 'ADD_ITEM';
export const SHOW_DETAIL = 'SHOW_DETAIL';

import { getBacklog, getPlanned, getProgress, getDone, addItem, updateItem } from '../utils/Database';

export function list() {
	const backlog = getBacklog();
	const planning = getPlanned();
	const progress = getProgress();
	const done = getDone();

	return {
		type: LIST_BOARD,
		backlog,
		planning,
		progress,
		done
	};
}

export function add(item: Item) {
	return (dispatch: Dispatch) => {
		addItem(item);
		dispatch(list());
	};
}

export function update(id: number, futureState: string) {
	return (dispatch: Dispatch) => {
    updateItem(id, futureState);
    dispatch(list());
  };
}
