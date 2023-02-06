import { User } from './user.entity';

export class Chat {
  constructor(
    public id: number,
    public name: string,
    public creatorId: number,
    public users: User[],
    public creationDate: string,
    public isHistorySaved?: boolean,
    public isGroup?: boolean,
    public image?: any,
  ) {}
}
