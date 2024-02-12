import { UserDto } from '../assets/types.ts';

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

export const isValidDataToUpdate = (object: unknown): object is Partial<UserDto> => {
  return (
    typeof object === 'object' &&
    object != null &&
    typeof object.username === 'string' &&
    typeof object.age === 'number' &&
    Array.isArray(object.hobbies) &&
    object.hobbies.every((hobby: unknown) => typeof hobby === 'string')
  );
};
