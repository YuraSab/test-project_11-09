import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class UserService{

  url = "https://randomuser.me/api/";

  async getUsers() {
    let response = await fetch(this.url);
    const data = await response.json();
    // console.log(data.results[0].gender);
    console.log(data.results);


    return data.results;
  }
}

// export const userService = new UserService();
