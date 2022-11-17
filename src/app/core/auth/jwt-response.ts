
export class JwtResponse {
  token: string;

  constructor(token: string, person: any) {
    this.token = token;
  }
}
