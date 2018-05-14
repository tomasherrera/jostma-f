import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response} from '@angular/http';
import { Sale } from "./sale.model"
import { SaleItem } from "../sale_items/sale_item.model"
import { Item } from "../items/item.model"
import { Client } from "../clients/client.model"

@Injectable()
export class SalesService {

  constructor(private http: Http) { }

  public sale: Sale = null;
  public sale_items: SaleItem[] = [];

  newSale(){
    this.sale = new Sale();
    this.sale.status = "draft";
    return this.http.post('http://localhost:3000/sales', this.sale).subscribe(
      (res: Response) =>      {
        this.sale = res.json();
      },
      error =>    {
        console.log(error);
      }   
    );  
  }

  saveSale(){
    this.sale.status = "completed";
    return this.http.patch('http://localhost:3000/sales/' + this.sale.id, this.sale).subscribe(
      (res: Response) =>      {
        console.log(res.json());
      },
      error =>    {
        console.log(error);
      }   
    );  
  }

  getSaleItems(){
    return this.http.get('http://localhost:3000/' + this.sale.id + '/sale_items').subscribe(
      (res: Response) =>      {
        this.sale_items = res.json();
      },
      error =>    {
        console.log(error);
      }   
    );  
  }

  saveSaleItem(sale_item: SaleItem){
    return this.http.patch('http://localhost:3000/sale_items/' + sale_item.id, sale_item).subscribe(
      (res: Response) =>      {
        //console.log(res.json());
      },
      error =>    {
        console.log(error);
      }   
    );  
  }

  sumTotal(){
    let sum = 0;
    for(let i = 0; i < this.sale_items.length; i++) {
      sum += this.sale_items[i]["subtotal"];
    }
    return sum;
  }

  calculateUnitPrice(sale_item: SaleItem){
    sale_item.unit_price = sale_item.subtotal / sale_item.quantity;
  }

  calculateSubtotal(sale_item: SaleItem){
    sale_item.subtotal = sale_item.unit_price * sale_item.quantity;
  }

  addSaleItem(item: Item){
    if(this.sale_items.length > 0 && this.sale_items.filter(sale_item => sale_item.item_id == item.id).length > 0){
      var sale_item: SaleItem = this.sale_items.filter(sale_item => sale_item.item_id == item.id)[0]
      sale_item.quantity += 1;
      this.calculateSubtotal(sale_item);
      this.saveSaleItem(sale_item);
    }else{
      var sale_item: SaleItem = new SaleItem();
      sale_item.item_id = item.id;
      sale_item.sale_id = this.sale.id;
      sale_item.quantity = 1;
      sale_item.unit_price = item.base_price;
      sale_item.subtotal = item.base_price;
      console.log(sale_item)
      return this.http.post('http://localhost:3000/sale_items', sale_item).subscribe(
        (res: Response) =>      {
          this.getSaleItems();
        },
        error =>    {
          console.log(error);
        }   
      );
    }
    
  }

  cleanupModal(){
    this.sale_items = [];
    this.sale = null;
  }

}
