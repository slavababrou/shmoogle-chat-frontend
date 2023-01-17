import { UserStatus } from "./status.entity";

export class User {
  constructor(
    public id: number,
    public statusId: UserStatus,
    public username: string,
    public login: string,
    public avatarUrl?: string
  ) {}
}
