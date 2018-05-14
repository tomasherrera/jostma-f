import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import { Item } from "./item.model"

@Injectable()
export class ItemsService {

  public items: Item[] = [];
  public item: Item;
  public itemsLoaded: boolean = false;
  public search: string = null;

  constructor(private http: Http) {}

  getItems(){
    return this.http.get('http://localhost:3000/items').subscribe(
      (response: Response) => {
        this.setItems(response.json());
        this.itemsLoaded = true;
      });
  }

  searchItems(){
    this.itemsLoaded = false;
    return this.http.get('http://localhost:3000/items_search?search=' + this.search).subscribe(
      (response: Response) => {
        this.setItems(response.json());
        this.itemsLoaded = true;
      });
  }

  setItems(items: Item[]){
    this.items = items;
  }
}
