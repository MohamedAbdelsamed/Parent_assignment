import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggin: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoggin = JSON.parse(localStorage.getItem("token"))
    if(JSON.parse(localStorage.getItem("token"))){
      this.isLoggin = true;
    }
    
  }

}
