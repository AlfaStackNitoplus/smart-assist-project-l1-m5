export interface User {
  userId: string;
  name: string;
  role: 'USER' | 'SUPPORT_ENGINEER' | 'ADMIN';
  email: string;
  password: string;
}
