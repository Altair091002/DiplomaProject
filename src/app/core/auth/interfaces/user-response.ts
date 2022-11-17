export class userResponse {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: any[];

  constructor(id: number, username: string, email: string, password: string, roles: any[]) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
