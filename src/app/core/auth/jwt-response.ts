
export class JwtResponse {
  token: string;
  person: any;


  constructor(token: string, person: any) {
    this.token = token;
    this.person = person;
  }
}
