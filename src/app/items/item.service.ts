import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Item } from './item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ItemService {

    private URL = "http://localhost:8080/items/";

    private items: Observable<Item[]>;
    itemsChanged = new Subject<Item[]>();
    itemsList: Item[];

    headers = new HttpHeaders()
        .append('Content-Type' , 'application/json');

    constructor(private http: HttpClient) { }

    getItems() {
        this.items = this.http.get<Item[]>(this.URL);
        return this.items;
    }

    getItem(itemNo: number) {
        return this.http.get<Item>(this.URL + itemNo);
    }

    updateItem(itemNo: number, newAmount: number) {
        return this.http.put(this.URL + itemNo, newAmount, { headers: this.headers });
    }

    addItem(item: Item) {
        return this.http.post<Item>(this.URL, item);
    }

    updateItems() {
        this.itemsChanged.next(this.itemsList);
    }

    deleteItem(itemNo: number) {
        return this.http.delete(this.URL + itemNo);
    }
}