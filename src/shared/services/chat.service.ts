import { Chat } from "core/entities/chat.entity";
import {
  CreateChatDto,
  IChatService,
  UpdateChatDto,
} from "core/interfaces/chat-service.interface";
import { getAvailableId } from "../utils/get-available-id";
import { UserService } from "./user.service";

export class ChatService implements IChatService {
  private userService = UserService.Instance;
  chats: Chat[] = [
    {
      id: 1,
      name: "chat1",
      creatorId: 1,
      users: [this.userService.users[0]],
      messages: [],
      creationDate: new Date().toString(),
      isGroup: true,
    },
    {
      id: 2,
      name: "chat2",
      creatorId: 2,
      users: [this.userService.users[1]],
      messages: [],
      creationDate: new Date().toString(),
    },
    {
      id: 3,
      name: "chat3",
      creatorId: 3,
      users: [this.userService.users[2]],
      messages: [],
      creationDate: new Date().toString(),
    },
    {
      id: 4,
      name: "chat4",
      creatorId: 4,
      users: [this.userService.users[3]],
      messages: [],
      creationDate: new Date().toString(),
    },
    {
      id: 5,
      name: "chat5",
      creatorId: 5,
      users: [this.userService.users[4]],
      messages: [],
      creationDate: new Date().toString(),
    },
  ];

  private static instance: ChatService;

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  async getAll() {
    return this.chats;
  }

  async get(id: number) {
    return this.chats.find((chat) => chat.id === id) || null;
  }

  async getByUserId(id: number) {
    return this.chats.filter((chat) => {
      return chat.users.find((user) => user.id == id);
    });
  }

  async create(instance: CreateChatDto) {
    const chatId = getAvailableId(this.chats);
    const user = await this.userService.get(instance.creatorId);

    if (!user) {
      throw new Error("no such user");
    }

    const chat = new Chat(
      chatId,
      instance.name,
      instance.creatorId,
      instance.users || [],
      [],
      new Date().toString(),
      instance.isHistorySaved,
      instance.isGroup,
      instance.image
    );
    chat.users.push(user);
    this.chats.push(chat);

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
}
