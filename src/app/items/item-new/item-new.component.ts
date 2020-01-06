import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit, OnDestroy {
  itemForm: FormGroup;
  itemExist = false;
  subscription: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
			'itemNo': new FormControl(null, [Validators.required, Validators.min(1)]),
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.min(0)]),
			'inventoryCode': new FormControl(null, [Validators.required, Validators.min(0)])
		});
  }

  onSubmit() {
    this.subscription.push(
      this.itemService.addItem(this.itemForm.value).subscribe({
        complete: () => {
          this.subscription.push(
            this.itemService.getItems().subscribe((items: Item[]) => {
              this.itemService.itemsList = items;
            }, err => console.log("Error: ", err),
            () => {
              this.itemService.updateItems();
              this.router.navigate(['../'], {relativeTo: this.route});
            })
          );
        }
      })
    );
  }

  onChangeItemNo(changedItemNo: number) {
    for (let i = 0; i < this.itemService.itemsList.length; i++) {
      if (this.itemService.itemsList[i].itemNo == changedItemNo) {
        this.itemExist = true;
        break;
      } else {
        this.itemExist = false;
      }
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
