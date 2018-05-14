import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import { Client } from "./client.model"

@Injectable()
export class ClientsService {

  public clients: Client[] = [];
  public client: Client;
  public clientsLoaded: boolean = false;
  public search: string = null;

  constructor(private http: Http) {}

  saveClient(){
    return this.http.post('http://localhost:3000/clients', this.client).subscribe(
      (res: Response) =>      {
        this.client = res.json();
        this.getClients();
        this.client = new Client();
      },
      error =>    {
        console.log(error);
      }   
    );  
  }

  getClients(){
    return this.http.get('http://localhost:3000/clients').subscribe(
      (response: Response) => {
        this.setClients(response.json());
        this.clientsLoaded = true;
      });
  }

  searchClients(){
    this.clientsLoaded = false;
    return this.http.get('http://localhost:3000/clients_search?search=' + this.search).subscribe(
      (response: Response) => {
        this.setClients(response.json());
        this.clientsLoaded = true;
      });
  }

  setClients(clients: Client[]){
    this.clients = clients;
  }
}

