import { UsersService, MockUsersService } from './data-services';
import { MOCK_USERS } from './mock-data';

export class AppDataServices {
  public usersService: UsersService;

  constructor(useMock = true) {
    if (useMock) {
      this.initMockDataServices();
    }
  }

  private initMockDataServices() {
    this.usersService = new MockUsersService(MOCK_USERS);
  }
}