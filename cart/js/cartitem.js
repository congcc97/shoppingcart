System.register([], function (exports_1, context_1) {
    "use strict";
    var CartItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CartItem = class CartItem {
                constructor(item, soluong) {
                    this._soluong = 1;
                    // code...
                    this._item = item;
                    this._soluong = soluong;
                }
                get item() {
                    return this._item;
                }
                set item(v) {
                    this._item = v;
                }
                get soluong() {
                    return this._soluong;
                }
                set soluong(v) {
                    this._soluong = v;
                }
                showCartItem() {
                    return ``;
                }
            };
            exports_1("CartItem", CartItem);
        }
    };
});
