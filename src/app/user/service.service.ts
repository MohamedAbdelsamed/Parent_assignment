import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class userService {
  url = 'https://reqres.in/'
  page = 1;
  count: any;
  reachToEnd: boolean;
  totalPages: number;

  constructor(
    private http: HttpClient
  ) { }


  getUserList(){
    this.reachToEnd = (this.page == this.totalPages );        
    
    return this.http.get(this.url + `api/users?page=${this.page}`).pipe(
      tap((res:any)=> {
        this.totalPages = res.total_pages
        this.page++;
      }),
      debounceTime(100), map((res: any)=> res.data))
      
    }
}
