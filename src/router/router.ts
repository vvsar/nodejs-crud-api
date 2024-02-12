import { IncomingMessage, ServerResponse } from 'http';
import { Storage } from '../storage/storage.ts';
import { Checker } from '../storage/checker.ts';
import { Controller } from '../storage/controller.ts';
import consts from '../assets/consts.ts';
import { HTTPMethods } from '../assets/enums.ts';

export const router = (processPort: number) => {
  const storage = new Storage();
  // const checker = new Checker(storage);
  // const controller = new Controller(checker);

  return async (
    request: IncomingMessage,
    response: ServerResponse<IncomingMessage>,
  ) => {
    response.setHeader('Content-Type', 'application/json');

    try {
      const { method, url } = request;
      console.log(
        `Executing ${method} ${url} request - server #${process.pid} on port ${processPort}`,
      );
      if (
        url &&
        !url.match(consts.API_URL) &&
        !url.match(consts.API_URL_WITH_ID)
      ) {
        throw new Error('Endpoint is not available');
      }

      switch (method) {
        // case HTTPMethods.GET:
        //   if (url && url.match(consts.API_URL_WITH_ID)) {
        //     await controller.getUser(request, response);
        //   } else {
        //     await controller.getAllUsers(request, response);
        //   }
        //   break;
        // case HTTPMethods.POST:
        //   if (url && !url.match(consts.API_URL)) {
        //     throw new Error('Endpoint is not available');
        //   }
        //   await controller.createUser(request, response);
        //   break;
        // case HTTPMethods.PUT:
        //   await controller.updateUser(request, response);
        //   break;
        // case HTTPMethods.DELETE:
        //   await controller.deleteUser(request, response);
        default:
          throw new Error('Method is not supported');
      }
    } catch (error) {
      // const { status, message } = error;

      response.statusCode = 500;
      response.end(JSON.stringify('Internal error'));
    }
  };
};
