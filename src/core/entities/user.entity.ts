export class User {
  constructor(
    public id: number,
    public statusId: number,
    public username: string,
    public login: string,
    public avatarUrl?: string
  ) {}
}
