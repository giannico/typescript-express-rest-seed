import { UsersService, User } from '../../../data';
import { Logger, LoggerFactory, RestController } from '../../../common';

export class UsersController extends RestController {
  constructor(private usersService: UsersService) {
    super();
  }

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  getAll(req, res, next): Promise<any> {
    UsersController.LOGGER.debug('Retrieving all users');

    return this.usersService.getAll()
      .then((users: Array<User>) => {
        return this.respond(res, users);
      });
  }

  get(req, res, next): any {
    return this.respond(res, req.user);
  }

  create(req, res, next): Promise<any> {
    const user = new User(req.body);
    this.validateModel(user);

    if (user.email === 'andre@andregiannico.com') {
      this.throwBusinessViolation('BLACKLISTED_EMAIL', 'This email is blacklisted.');
    }

    return this.usersService.create(user)
      .then((user: User) => {
        return this.respond(res, user);
      });
  }

  update(req, res, next: any): Promise<any> {
    const userToUpdate: User = (<User> req.user);
    userToUpdate.set(req.body);
    this.validateModel(userToUpdate);

    return this.usersService.update(userToUpdate.id, userToUpdate)
      .then((updatedUser: User) => {
        return this.respond(res, updatedUser);
      });
  }

  delete(req, res, next): Promise<any> {
    return this.usersService.delete(req.user.id)
      .then(() => {
        return this.respondNoContent(res);
      });
  }

  resolveUser(req, res, next, userId: string): Promise<any> {
    return this.usersService.get(userId)
      .then((user: User) => {
        this.validateResourceFound(user);
        req.user = user;
        next();
      });
  }
}