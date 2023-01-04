import { Message } from "../entities/message.entity";
import { User } from "../entities/user.entity";
import { IGenericService } from "./generic-service.interface";

export interface IMessageService extends IGenericService<Message> {
  getAll(chatId?: number): Promise<Message[]>;
  create(instance: CreateMessageDto): Promise<Message>;
  update(id: number, data: UpdateMessageDto): Promise<Message | null>;
}

export interface CreateMessageDto {
  chatId: number;
  user: User;
  text: string;
  creationDate: Date;
  file?: any;
  responseToId?: number;
}

export interface UpdateMessageDto {
  text?: string;
  file?: any;
}
