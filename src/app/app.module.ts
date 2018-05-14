import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SalesComponent } from './sales/sales.component';
import { NewSaleModalComponent } from './sales/new-sale-modal/new-sale-modal.component';
import { NewSaleContentComponent } from './sales/new-sale-content/new-sale-content.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemsComponent } from './items/items.component';
import { ItemsService } from './items/items.service';
import { SalesService } from './sales/sales.service';
import { ClientsService } from './clients/clients.service';
import { ClientsComponent } from './clients/clients.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SalesComponent,
    NewSaleModalComponent,
    NewSaleContentComponent,
    ItemsComponent,
    ClientsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HotkeyModule.forRoot(),
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ ItemsService, SalesService, ClientsService ],
  entryComponents: [
    NewSaleContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
