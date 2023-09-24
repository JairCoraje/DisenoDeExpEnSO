export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  premium: boolean;
  plants?: any;
  events?: any;
  plots?: any;
}
