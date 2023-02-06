import { User } from './user.entity';

export class Dm {
  constructor(
    public id: number,
    public owner: User,
    public user: User,
    public creationDate: string,
    public isHistorySaved?: boolean,
  ) {}
}
