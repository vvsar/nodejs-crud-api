import { UserDto } from '../assets/types.ts';
import consts from '../assets/consts.ts';
import { IncomingMessage } from 'http';
import { resolve } from 'path';

export const isValidUserData = (object: unknown): object is UserDto => {
  return (
    typeof object === 'object' &&
    object != null &&
    typeof object.username === 'string' &&
    typeof object.age === 'number' &&
    Array.isArray(object.hobbies) &&
    object.hobbies.every((hobby: unknown) => typeof hobby === 'string')
  );
};

export const isValidDataToUpdate = (
  object: unknown,
): object is Partial<UserDto> => {
  return (
    typeof object === 'object' &&
    object != null &&
    typeof object.username === 'string' &&
    typeof object.age === 'number' &&
    Array.isArray(object.hobbies) &&
    object.hobbies.every((hobby: unknown) => typeof hobby === 'string')
  );
};

export const getId = (url: string | undefined) => {
  if (typeof url === 'undefined') return '';
  const splittedUrl = url.match(consts.API_URL_TO_SPLIT);
  return splittedUrl ? splittedUrl[1] : '';
};

export const getBody = (request: IncomingMessage): Promise<{}> => {
  return new Promise((resolve, reject) => {
    const buff: Uint8Array[] = [];
    request
      .on('data', (chunk: Uint8Array) => {
        buff.push(chunk);
      })
      .on('end', () => {
        const body = Buffer.concat(buff).toString().trim();
        try {
          resolve(body ? JSON.stringify(body) : {});
        } catch {
          reject(() => {throw new Error('Invalid data')});
        }
      })
  }
};
