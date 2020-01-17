import { Item } from "./item.js";

export class CartItem {

    private _item : Item;
    private _soluong : number = 1;

    constructor(item:Item, soluong:number) {
        // code...
        this._item = item;
        this._soluong = soluong;
    }

    public get item() : Item {
        return this._item;
    }

    public set item(v : Item) {
        this._item = v;
    }

    public get soluong() : number {
        return this._soluong;
    }

    public set soluong(v : number) {
        this._soluong = v;
    }

    showCartItem() : string{
        return ``;
    }

}
