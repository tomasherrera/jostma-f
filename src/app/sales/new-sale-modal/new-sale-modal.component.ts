import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HotkeysService } from 'angular2-hotkeys';
import { Hotkey } from 'angular2-hotkeys';
import { NewSaleContentComponent } from '../new-sale-content/new-sale-content.component';
import { ItemsService } from '../../items/items.service';
import { SalesService } from '../../sales/sales.service';
import { ClientsService } from '../../clients/clients.service';

@Component({
  selector: 'app-new-sale-modal',
  templateUrl: './new-sale-modal.component.html',
  styleUrls: ['./new-sale-modal.component.css']
})
export class NewSaleModalComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal, private _hotkeysService: HotkeysService, private itemsService: ItemsService, private salesService: SalesService, private clientsService: ClientsService) {
    this._hotkeysService.add(new Hotkey('shift+v', (event: KeyboardEvent): boolean => {
      this.open();
      return false; // Prevent bubbling
    }));
  } 

  open() {
    const modalRef = this.modalService.open(NewSaleContentComponent, { size: 'lg'});
    modalRef.componentInstance.name = 'World';
    this.itemsService.searchItems();
    this.clientsService.searchClients();
    this.salesService.newSale();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
