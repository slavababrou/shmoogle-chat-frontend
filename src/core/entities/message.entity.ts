import { User } from "./user.entity";

// TODO: find or create file type
export class Message {
  constructor(
    public id: number,
    public chatId: number,
    public user: User,
    public text: string,
    public creationDate: Date,
    public responses: Message[],
    public file?: any,
    public responseToId?: number | null,
    public isModified?: boolean
  ) {}
}
