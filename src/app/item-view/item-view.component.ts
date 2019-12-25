import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  public item = {};

  constructor(private itemData: ItemsService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = this.itemData.getCurrentItems(+params.id);
    });
  }

  backClicked() {
    this.location.back();
  }
}
