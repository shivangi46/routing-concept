import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users =[
    {
      id: 1,
      name : "Mark",
      status : "Online"
    },
    {
      id: 2,
      name : "Perl",
      status : "Offline"
    },
    {
      id: 3,
      name : "Cherry",
      status : "Online"
    },];

  constructor() { }

  ngOnInit(): void {
  }

}
