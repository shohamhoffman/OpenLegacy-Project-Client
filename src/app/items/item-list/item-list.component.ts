import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {

  items: Item[];
  subscription: Subscription[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  onNewItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onDeleteItem(index: number) {
    this.subscription.push(
      this.itemService.deleteItem(this.itemService.itemsList[index].itemNo).subscribe({
        complete: () => {
          this.getAllItems();
        }
      })
    );
  }

  onChangeAmount(index: number, newAmount: number) {
    this.itemService.itemsList[index].amount = newAmount;
    this.subscription.push(
      this.itemService.updateItem(this.itemService.itemsList[index].itemNo, newAmount).subscribe({
        complete: () => {
          this.getAllItems();
        }
      })
    );
  }

  getAllItems() {
    this.subscription.push(
      this.itemService.getItems().subscribe((items: Item[]) => {
        this.itemService.itemsList = items;
        this.items = items;
      })
    );

    this.subscription.push(
      this.itemService.itemsChanged.subscribe((items: Item[]) => {
        this.items = items;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
