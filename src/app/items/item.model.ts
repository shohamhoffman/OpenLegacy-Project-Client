export class Item {
    public itemNo: number;
    public name: string;
    public amount: number;
    public inventoryCode: number;

    constructor(itemNo: number, name: string, amount: number, inventoryCode: number) {
        this.itemNo = itemNo
        this.name = name;
        this.amount = amount;
        this.inventoryCode = inventoryCode;
    }
}