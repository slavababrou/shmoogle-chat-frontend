import { Message } from "../../core/entities/message.entity";
import { User } from "../../core/entities/user.entity";
import {
  CreateMessageDto,
  IMessageService,
  UpdateMessageDto,
} from "../../core/interfaces/message-service.interface";

export class MessageService implements IMessageService {
  messages: Message[] = [
    {
      id: 1,
      chatId: 1,
      user: new User(1, 2, "not a user", "none"),
      text: "text",
      creationDate: new Date(),
      responses: [],
      isModified: false,
    },
  ];

  async getAll(chatId?: number) {
    if (!chatId) {
      return this.messages;
    }

    return this.messages.filter((message) => message.chatId === chatId);
  }

  async get(id: number) {
    return this.messages.find((message) => message.id === id) || null;
  }

  async create(instance: CreateMessageDto) {
    const messageId = this.getAvailableId(this.messages);
    const { chatId, user, text, creationDate, file, responseToId } = instance;
    const message = new Message(
      messageId,
      chatId,
      user,
      text,
      creationDate,
      file,
      [],
      responseToId,
      false
    );
    this.messages.push(message);

    if (responseToId) {
      const responseTargetMessage = await this.get(responseToId);
      responseTargetMessage?.responses.push(message);
    }
    return message;
  }

  async update(id: number, data: UpdateMessageDto) {
    const message = await this.get(id);

    if (!message) {
      throw new Error("no such message!");
    }

    const { text, file } = data;
    message.text = text ?? message.text;
    message.file = file ?? message.file;
    message.isModified = true;

    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    if (index === -1) {
      throw new Error("no such message");
    }

    this.messages.splice(index, 1);
    return true;
  }

  private getAvailableId(array: Message[]) {
    let id = 0;
    array.forEach((instance) => (id = instance.id > id ? instance.id : id));
    return id + 1;
  }
}
