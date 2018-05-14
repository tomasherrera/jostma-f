import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { Item } from '../items/item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItems();
    this.itemsService.item = new Item();

  }

}
