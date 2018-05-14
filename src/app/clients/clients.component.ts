import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients/clients.service';
import { AppComponent } from '../app.component';
import { Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Client } from "./client.model";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private app: AppComponent, private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getClients();
    this.clientsService.client = new Client();
  }

  example(){
    if(prompt("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
    }
  }

}