export interface User {
  id?: number;
  forename: string;
  surname: string;
  email: string;
  birthday?: Date;
}

export const defaultUser: User = {
  forename: '',
  surname: '',
  email: ''
}