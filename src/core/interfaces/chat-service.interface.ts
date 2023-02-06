import { Chat } from '../entities/chat.entity';
import { User } from '../entities/user.entity';
import { IGenericService } from './generic-service.interface';

export interface IChatService extends IGenericService<Chat> {
  getByUserId(id: number): Promise<Chat[]>;
  create(instance: CreateChatDto): Promise<Chat>;
  update(id: number, data: UpdateChatDto): Promise<Chat | null>;
}

export interface CreateChatDto {
  name: string;
  creatorId: number;
  isGroup?: boolean;
  isHistorySaved?: boolean;
  image?: string;
  users?: User[];
}

export interface UpdateChatDto {
  name?: string;
  creatorId?: number;
  image?: string;
  isHistorySaved?: boolean;
  isGroup?: boolean;
}
