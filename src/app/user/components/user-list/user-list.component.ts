
import { Component, HostListener, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/interface';
import { userService } from '../../service.service';
import { LoadAllUsers, UserActoinTypes } from '../../state/state.actions';
import { getAllUsersState, UsersState } from '../../state/state.reducer';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[] = []
  constructor( private users: userService, private store : Store<UsersState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadAllUsers())

    this.store.pipe(select(getAllUsersState))
    .subscribe((res:any) =>{
      // this.userList = this.userList.concat(res)
     this.userList = [...this.userList, ...res] 
      // this.userList.push(res)
      console.log("rew",res)
    })
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      console.log("scrolling...");
      console.log(document.documentElement.scrollTop );
      console.log(document.body.scrollTop);

      if(!this.users.reachToEnd)
       this.store.dispatch(new LoadAllUsers())
      
  }
}
