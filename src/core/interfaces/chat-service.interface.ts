import { ChatInfo } from "../entities/chat-info.entity";
import { Chat } from "../entities/chat.entity";
import { IGenericService } from "./generic-service.interface";

export interface IChatService extends IGenericService<Chat> {
  create(instance: CreateChatDto): Promise<Chat>;
  update(id: number, data: UpdateChatDto): Promise<Chat | null>;
  getChatInfo(id: number): Promise<ChatInfo | null>;
}

export interface CreateChatDto {
  name: string;
  creatorId: number;
  image?: string;
}

export interface UpdateChatDto {
  name?: string;
  creatorId?: number;
  image?: string;
}
