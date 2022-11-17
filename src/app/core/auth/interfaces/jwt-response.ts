
export class JwtResponse {
  token: string;
  email: string;
  username: string;

  constructor(token: string, email: string, username: string) {
    this.token = token;
    this.email = email;
    this.username = username;
  }
}
