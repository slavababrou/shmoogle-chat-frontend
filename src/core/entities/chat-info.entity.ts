import { Message } from "./message.entity";
import { User } from "./user.entity";

export class ChatInfo {
  constructor(
    public id: number,
    public chatId: number,
    public users: User[],
    public messages: Message[]
  ) {}
}
