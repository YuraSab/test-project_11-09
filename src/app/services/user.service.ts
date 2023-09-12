import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class UserService{

  constructor(private httpClient: HttpClient) {}

  private readonly url = "https://randomuser.me/api/";
  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<{results: User[]}>(this.url).pipe(
      map(response => response.results),
      tap(users => this.users.next(users))
    );
  };
}
