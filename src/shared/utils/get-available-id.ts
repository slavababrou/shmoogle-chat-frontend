export function getAvailableId<T extends WithId>(array: Array<T>): number {
  let id = 0;
  array.forEach((instance) => (id = instance.id > id ? instance.id : id));
  return id + 1;
}

interface WithId {
  id: number;
}