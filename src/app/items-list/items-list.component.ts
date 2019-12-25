import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-list-items',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list..component.scss']
})
export class ListItemsComponent implements OnInit {
  items = [];
  itemsLenght = 0;

  pageEvent: PageEvent;

  constructor(private itemsData: ItemsService) {
  }

  ngOnInit() {
    this.items = this.itemsData.getAllData();
    this.itemsLenght = this.items.length
  }

  pagination(event) {
    this.items = this.itemsData.pagination(this.pageEvent);
  }
}
