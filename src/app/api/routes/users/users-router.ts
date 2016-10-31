import { RestRouter } from '../../../common';
import { UsersController } from './users-controller';
import { UsersService } from '../../../data';

export class UsersRouter extends RestRouter {
  usersCtrl: UsersController;

  constructor(usersService: UsersService) {
    super();
    this.usersCtrl = new UsersController(usersService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.param('userId', this.wrapParamFn(this.usersCtrl, this.usersCtrl.resolveUser));

    this.router.get('/', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.getAll));
    this.router.post('/', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.create));
    this.router.all('/', this.wrapRouteFn(this.usersCtrl,
        this.usersCtrl.throwMethodNotAllowedError));

    this.router.get('/:userId', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.get));
    this.router.delete('/:userId', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.delete));
    this.router.patch('/:userId', this.wrapRouteFn(this.usersCtrl, this.usersCtrl.update));
    this.router.all('/:userId', this.wrapRouteFn(this.usersCtrl,
        this.usersCtrl.throwMethodNotAllowedError));
  }
}