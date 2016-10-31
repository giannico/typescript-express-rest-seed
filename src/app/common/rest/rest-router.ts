import express = require('express');
import { Router } from 'express';
import { RestController } from './rest-controller';

export abstract class RestRouter {
  router: Router;

  constructor() {
    this.router = express.Router();
  }

  abstract initRoutes();

  wrapParamFn(controller: RestController, handlerFn: Function) {
    return (req, res, next, param) => {
      return Promise.resolve(handlerFn.bind(controller)(req, res, next, param))
        .catch(err => next(err));
    };
  }

  wrapRouteFn(controller: RestController, handlerFn: Function) {
    return (req, res, next) => {
      return Promise.resolve(handlerFn.bind(controller)(req, res, next))
        .catch(err => next(err));
    };
  }

}