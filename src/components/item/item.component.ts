import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item;
  @Output() item = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
