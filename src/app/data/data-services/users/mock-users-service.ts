import { User } from '../../models';
import { UsersService } from './users-service';

export class MockUsersService implements UsersService {
  private userMap: Map<string, User>;
  private maxUserId: number = 0;

  constructor(users: Array<User>) {
    this.userMap = this.populateUserMap(users);

    const userIds = Array.from(this.userMap.keys())
      .map(val => parseInt(val));

    this.maxUserId = Math.max(...userIds);
  }

  getAll(): Promise<Array<User>> {
    const users = Array.from(this.userMap.values());
    return Promise.resolve(users);
  };

  get(id: string): Promise<User> {
    let user = this.userMap.get(id);

    if (user == null) { return Promise.resolve(null); }

    return Promise.resolve(user);
  }

  create(user: User): Promise<User> {
    const newUserId = ++this.maxUserId;
    user.id = newUserId.toString();

    this.userMap.set(user.id, user);
    return Promise.resolve(user);
  }

  update(id: string, user: User): Promise<User> {
    this.userMap.set(id, user);
    return Promise.resolve(user);
  }

  delete(id: string): Promise<void> {
    console.log('Deleting!');
    this.userMap.delete(id);
    return Promise.resolve();
  }

  /////////////////////

  private populateUserMap(users: Array<User>): Map<string, User> {
    const usersMap = new Map<string, User>();

    users.forEach((user) => usersMap.set(user.id, user));

    return usersMap;
  }
}