import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-data';

const usersPromise: Promise<User[]> = new Promise(resolve => {
  setTimeout(() => {
    resolve(USERS);
  }, 1000);
});

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getAllUsers(): Promise<User[]> {
    return usersPromise;
  }

  getUser(id: number): Promise<User | undefined> {
    return usersPromise.then(users => users.find(user => user.id === id));
  }

}
