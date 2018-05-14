import { Component, OnInit } from '@angular/core';
import { Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  
  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

}
