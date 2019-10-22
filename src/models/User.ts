export interface User {
  id?: number;
  forename: string;
  surname: string;
  email: string;
  birthday?: string;
}

export const defaultUser: User = {
  forename: '',
  surname: '',
  email: ''
}