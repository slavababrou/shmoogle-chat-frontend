import { Dm } from 'core/entities/dm.entity';
import { CreateDmDto, IDmService, UpdateDmDto } from 'core/interfaces/dm-service.interface';
import { getAvailableId } from '../utils/get-available-id';
import { UserService } from './user.service';

export class DmService implements IDmService {
  private userService = UserService.Instance;
  dms: Dm[] = [
    {
      id: 1,
      owner: this.userService.users[0],
      user: this.userService.users[1],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
    {
      id: 1,
      owner: this.userService.users[1],
      user: this.userService.users[0],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
    {
      id: 2,
      owner: this.userService.users[0],
      user: this.userService.users[2],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
    {
      id: 2,
      owner: this.userService.users[2],
      user: this.userService.users[0],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
    {
      id: 3,
      owner: this.userService.users[3],
      user: this.userService.users[0],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
    {
      id: 3,
      owner: this.userService.users[0],
      user: this.userService.users[3],
      creationDate: new Date().toString(),
      isHistorySaved: true,
    },
  ];

  private static instance: DmService;

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  async getAll() {
    return this.dms;
  }

  async get(id: number) {
    return this.dms.find((dm) => dm.id === id) || null;
  }

  async getByOwnerId(id: number) {
    return this.dms.filter((dm) => dm.owner.id === id);
  }

  async getByUserId(ownerId: number, userId: number) {
    const dm = this.dms.find((dm) => dm.owner.id === ownerId && dm.user.id === userId);
    if (!dm) {
      throw new Error('No such dm');
    }
    return dm;
  }

  async create(instance: CreateDmDto) {
    const dmId = getAvailableId(this.dms);
    const owner = await this.userService.get(instance.ownerId);

    if (!owner) {
      throw new Error('no such user');
    }

    const dm = new Dm(dmId, owner, instance.user, new Date().toString(), instance.isHistorySaved);
    this.dms.push(dm);

    return dm;
  }

  async update(id: number, data: UpdateDmDto) {
    const dm = await this.get(id);

    if (!dm) {
      throw new Error('no such dm');
    }

    const { isHistorySaved } = data;
    dm.isHistorySaved = isHistorySaved ?? true;
    return dm;
  }

  async delete(id: number) {
    const index = this.dms.findIndex((dm) => dm.id === id);

    if (index === -1) {
      throw new Error('no such dm');
    }

    this.dms.splice(index, 1);
    return true;
  }
}
