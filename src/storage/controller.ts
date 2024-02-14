import { IncomingMessage, ServerResponse } from 'http';
import { InfoChecker, InfoController } from '../assets/types.ts';
import { HTTPCodes } from '../assets/enums.ts';
import { getBody, getId } from '../utils/utils.ts';

export class Controller implements InfoController {
  checker: InfoChecker;
  constructor(newChecker: InfoChecker) {
    this.checker = newChecker;
  }

  async getAllUsers(_: IncomingMessage, response: ServerResponse) {
    const users = await this.checker.getAllUsers();
    this.sendResponse(response, users);
  }

  async getUser(request: IncomingMessage, response: ServerResponse) {
    const id = getId(request.url);
    const user = await this.checker.getUser(id);
    this.sendResponse(response, user);
  }

  async createUser(request: IncomingMessage, response: ServerResponse) {
    const body = await getBody(request);
    const newUser = await this.checker.createUser(body);
    this.sendResponse(response, newUser, HTTPCodes.CREATED);
  }

  async updateUser(request: IncomingMessage, response: ServerResponse) {
    const id = getId(request.url);
    const body = await getBody(request);
    const updatedUser = await this.checker.updateUser(id, body);
    this.sendResponse(response, updatedUser);
  }

  async deleteUser(request: IncomingMessage, response: ServerResponse) {
    const id = getId(request.url);
    const deleted = await this.checker.deleteUser(id);
    this.sendResponse(response, deleted, HTTPCodes.NO_CONTENT);
  }

  sendResponse<T>(
    response: ServerResponse<IncomingMessage>,
    data: T,
    status: HTTPCodes = HTTPCodes.OK,
  ) {
    response.statusCode = status;
    response.end(JSON.stringify(data));
  }
}
