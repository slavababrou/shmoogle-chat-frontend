export interface IGenericService<T> {
  getAll(): Promise<T[]>;
  get(id: number): Promise<T | null>;
  create(instance: any): Promise<T>;
  update(id: number, data: any): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}
