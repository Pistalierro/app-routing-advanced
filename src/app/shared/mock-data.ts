import {Phrase} from './phrase';
import {User} from './user';

export const PHRASES: Phrase [] = [
  new Phrase(1, 'Привіт Світ', 'Ukrainian'),
  new Phrase(2, 'Hello world', 'English'),
  new Phrase(3, 'Hola Mundo', 'Spain'),
  new Phrase(4, 'Bonjour monde', 'French'),
  new Phrase(5, 'Hallo Welt', 'German'),
  new Phrase(6, 'Ciao mondo', 'Italian'),
  new Phrase(7, 'Witaj świecie', 'Polish'),
  new Phrase(8, 'Hej världen', 'Swedish'),
  new Phrase(9, 'Pozdravljen', 'Slovenian'),

];

export const USERS: User [] = [
  new User(1, 'Oliver Francis', 'admin'),
  new User(2, 'Michael Mills', 'moderator'),
  new User(3, 'Paul McDaniel', 'registered'),
  new User(4, 'Jonathan Matthews', 'unregistered'),
  new User(5, 'William Harris', 'visitor'),
];
