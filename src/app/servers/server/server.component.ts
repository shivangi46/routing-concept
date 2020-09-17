import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server :{id : number, name : string , status : string} ;
  constructor(private serverservice : ServerService ) { }

  ngOnInit() {
   this.server= this.serverservice.getserverid(1);
  }
   

}
