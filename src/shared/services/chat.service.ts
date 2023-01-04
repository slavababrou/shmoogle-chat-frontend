import { ChatInfo } from "../../core/entities/chat-info.entity";
import { Chat } from "../../core/entities/chat.entity";
import {
  CreateChatDto,
  IChatService,
  UpdateChatDto,
} from "../../core/interfaces/chat-service.interface";

export class ChatService implements IChatService {
  private chats: Chat[] = [
    { id: 1, name: "chat1", creatorId: 1 },
    { id: 2, name: "chat2", creatorId: 2 },
    { id: 3, name: "chat3", creatorId: 3 },
    { id: 4, name: "chat4", creatorId: 4 },
    { id: 5, name: "chat5", creatorId: 5 },
  ];

  private chatInfos: ChatInfo[] = [
    { id: 1, chatId: 1, users: [], messages: [] },
    { id: 2, chatId: 2, users: [], messages: [] },
    { id: 3, chatId: 3, users: [], messages: [] },
    { id: 4, chatId: 4, users: [], messages: [] },
    { id: 5, chatId: 5, users: [], messages: [] },
  ];

  async getAll() {
    return this.chats;
  }

  async get(id: number) {
    return this.chats.find((chat) => chat.id === id) || null;
  }

  async getChatInfo(id: number) {
    return this.chatInfos.find((chatInfo) => chatInfo.chatId === id) || null;
  }

  async create(instance: CreateChatDto) {
    const chatId = this.getAvailableId(this.chats);
    const chatInfoId = this.getAvailableId(this.chatInfos);

    const chat = new Chat(
      chatId,
      instance.name,
      instance.creatorId,
      instance.image
    );
    const chatInfo = new ChatInfo(chatInfoId, chatId, [], []);
    this.chats.push(chat);
    this.chatInfos.push(chatInfo);
    return chat;
  }

  async update(id: number, data: UpdateChatDto) {
    const chat = await this.get(id);

    if (!chat) {
      throw new Error("no such chat");
    }

    const { name, image, creatorId } = data;
    chat.name = name ?? chat.name;
    chat.creatorId = creatorId ?? chat.creatorId;
    chat.image = image ?? chat.image;
    return chat;
  }

  async delete(id: number) {
    const index = this.chats.findIndex((chat) => chat.id === id);

    if (index === -1) {
      throw new Error("no such chat");
    }

    this.chats.splice(index, 1);
    return true;
  }

  private getAvailableId(array: Chat[] | ChatInfo[]) {
    let id = 0;
    array.forEach((instance) => (id = instance.id > id ? instance.id : id));
    return id + 1;
  }
}
