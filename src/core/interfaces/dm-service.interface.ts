import { Dm } from '../entities/dm.entity';
import { User } from '../entities/user.entity';
import { IGenericService } from './generic-service.interface';

export interface IDmService extends IGenericService<Dm> {
  getByOwnerId(id: number): Promise<Dm[]>;
  getByUserId(ownerId: number, userId: number): Promise<Dm>;
  create(instance: CreateDmDto): Promise<Dm>;
  update(id: number, data: UpdateDmDto): Promise<Dm | null>;
}

export interface CreateDmDto {
  user: User;
  ownerId: number;
  isHistorySaved?: boolean;
}

export interface UpdateDmDto {
  isHistorySaved?: boolean;
}
