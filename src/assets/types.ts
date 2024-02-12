export type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export type UserDto = {
  username: string;
  age: number;
  hobbies: string[];
};

export type Deleted = 'deleted';

export interface InfoStorage {
  getAllUsers: () => Promise<User[]>;
  getUser: (id: string) => Promise<User>;
  createUser: (user: UserDto) => Promise<User>;
  updateUser: (id: string, data: Partial<UserDto>) => Promise<User>;
  deleteUser: (id: string) => Promise<Deleted>;
}

export interface InfoChecker {
  getAllUsers: () => Promise<User[]>;
  getUser: (id: string) => Promise<User>;
  createUser: (user: unknown) => Promise<User>;
  updateUser: (id: string, data: unknown) => Promise<User>;
  deleteUser: (id: string) => Promise<Deleted>;
}
