import { validate as validateId } from 'uuid';
import { InfoChecker, InfoStorage, UserDto } from '../assets/types.ts';
// import { isValidUserData, isValidDataToUpdate } from '../utils/utils.ts';

export class Checker implements InfoChecker {
  storage: InfoStorage;
  constructor(newStorage: InfoStorage) {
    this.storage = newStorage;
  }

  async getAllUsers() {
    return await this.storage.getAllUsers();
  }

  async getUser(id: string) {
    if (!validateId(id)) {
      throw new Error('User ID is not valid');
    }
    return await this.storage.getUser(id);
  }

  async createUser(userData: UserDto) {
    // userdata - unknown
    // if (!isValidUserData(userData)) {
    //   throw new Error('Invalid data');
    // }
    return await this.storage.createUser(userData);
  }

  async updateUser(id: string, data: UserDto) {
    // data -- unknown
    if (!validateId(id)) {
      throw new Error('User ID is not valid');
    }
    // if (!isValidDataToUpdate(data)) {
    //   throw new Error('Invalid data');
    // }
    return await this.storage.updateUser(id, data);
  }

  async deleteUser(id: string) {
    if (!validateId(id)) {
      throw new Error('User ID is not valid');
    }
    return await this.storage.deleteUser(id);
  }
}
