import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class UserService{

  url = "https://randomuser.me/api/";

  async getUsers() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.results;
  }
}
