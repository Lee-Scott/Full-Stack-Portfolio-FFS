import { Component } from '@angular/core';
import { SalesPerson } from '../sales-person';
import { TemplateRef } from '@angular/core';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Sam", "Smith", "@gmail", 4000),
    new SalesPerson("Joe", "Mama", "@gmail", 2000),
    new SalesPerson("Stink", "LeQue", "@gmail", 100),
    new SalesPerson("Batman", "Burner", "@gmail", 100000000)
  ]
  myElseBlock!: TemplateRef<NgIfContext<boolean>> | null;
}
