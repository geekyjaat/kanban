// @flow
import data from './data';

// console.log(data);

type StateType = "BACKLOG" | "PLANNING" | "PROGRESS" | "DONE";
type ItemType = "USER_STORY" | "DEFECT" | "TASK";

export type Item = {
  id: number,
  title: string,
  description: string,
  type: ItemType,
  state: StateType
}

function getItemsByState(stateType: StateType): Item[] {
  let returnItems = [];
  data.items.forEach((item) => {
    if (item.state === stateType) {
      returnItems.push(item);
    }
  })
  return returnItems;
}

function getItemsByType(itemType: ItemType): Item[] {
  let returnItems = [];
  data.items.forEach((item) => {
    if (item.type === itemType) {
      returnItems.push(item);
    }
  })
  return returnItems;
}

export function addItem(item: Item) {
  item.id = data.count + 1;
  data.items.push(item);
}

export function getBacklog(): Item[] {
  return getItemsByState("BACKLOG");
}

export function getPlanned(): Item[] {
  return getItemsByState('PLANNING');
}

export function getProgress(): Item[] {
  return getItemsByState('PROGRESS');
}

export function getDone(): Item[] {
  return getItemsByState('DONE');
}

export function getStories(): Item[] {
  return getItemsByType("USER_STORY");
}

export function getDefects(): Item[] {
  return getItemsByType("DEFECT");
}

export function getTasks(): Item[] {
  return getItemsByType("TASK");
}

export function updateItem(id: number, futureState: string) {
  data.items.forEach(item => {
    if (item.id === id) {
      item.state = futureState;
    }
  });
}
