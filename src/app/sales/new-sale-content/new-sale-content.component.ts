import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from '../../items/items.service';
import { SalesService } from '../../sales/sales.service';
import { ClientsService } from '../../clients/clients.service';

@Component({
  selector: 'app-new-sale-content',
  templateUrl: './new-sale-content.component.html',
  styleUrls: ['./new-sale-content.component.css']
})
export class NewSaleContentComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal, private itemsService: ItemsService, private salesService: SalesService, private clientsService: ClientsService) {}

  unitCost: number = 4000;
  qty: number = 1;
  subTotal: number = this.unitCost * this.qty; 

  getSubTotal(){
    this.subTotal = this.unitCost * this.qty;
    return this.subTotal;
  }
}
