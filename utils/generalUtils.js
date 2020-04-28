import { v4 as uuidV4 } from 'uuid';

export function generateUUID() {
  return uuidV4();
}

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
