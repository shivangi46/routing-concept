import { Component, OnInit } from '@angular/core';
import { ServerService }  from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers : [ServerService]
})
export class ServersComponent implements OnInit {
  servers : {id : number, name : string, status : string}[];
  constructor(private serverservice :  ServerService) { }

  ngOnInit(): void {
    this.servers = this.serverservice.getserver();
  }

}
