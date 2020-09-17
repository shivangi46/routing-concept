import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server : { id : number, name :string, status : string};
  Selectinput = "";
  Selectstatus = "";
  constructor(private serverservice : ServerService) { }

  ngOnInit() {
      this.server = this.serverservice.getserverid(1);
       this.Selectinput = this.server.name;
       this.Selectstatus = this.server.status;
  }

  OnselectUpdate(){
      this.serverservice.OnUpdate(this.server.id, {name : this.Selectinput, status : this.Selectstatus} )
  }
}
