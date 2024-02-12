import { Deleted, InfoStorage, User, UserDto } from '../assets/types.ts';
import { v4 as createId } from 'uuid';

export class Storage implements InfoStorage {
  users: User[];
  constructor() {
    this.users = [];
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error('User not found');
  }

  async createUser(user: UserDto): Promise<User> {
    const newUser = { ...user, id: createId() };
    this.users.push();
    return newUser;
  }

  async updateUser(id: string, data: Partial<UserDto>): Promise<User> {
    const userToUpdate = this.users.find((user) => user.id === id);
    if (userToUpdate) {
      const newUser = Object.create(userToUpdate);
      let key: keyof typeof data;
      for (key in data) {
        newUser[key] = data[key];
      }
      this.users[this.users.indexOf(userToUpdate)] = newUser;
      return newUser;
    }
    throw new Error('User not found');
  }

  async deleteUser(id: string): Promise<Deleted> {
    const userToDelete = this.users.find((user) => user.id === id);
    if (userToDelete) {
      this.users.splice(this.users.indexOf(userToDelete), 1);
      return 'deleted';
    }
    throw new Error('User not found');
  }
}
