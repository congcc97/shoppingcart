System.register([], function (exports_1, context_1) {
    "use strict";
    var Item;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Item = class Item {
                //Constructor
                constructor(id, ten, nsx, gia, tinhtrang, anh) {
                    this.id = id;
                    this.ten = ten;
                    this.nsx = nsx;
                    this.gia = gia;
                    this.tinhtrang = tinhtrang;
                    this.anh = anh;
                }
                // get and set _id
                get id() {
                    return this._id;
                }
                set id(v) {
                    this._id = v;
                }
                // get and set _ten
                get ten() {
                    return this._ten;
                }
                set ten(v) {
                    this._ten = v;
                }
                // get and set _nsx
                get nsx() {
                    return this._nsx;
                }
                set nsx(v) {
                    this._nsx = v;
                }
                // get and set _gia
                get gia() {
                    return this._gia;
                }
                set gia(v) {
                    this._gia = v;
                }
                // get and set _tinhtrang
                get tinhtrang() {
                    return this._tinhtrang;
                }
                set tinhtrang(v) {
                    this._tinhtrang = v;
                }
                // get and set _anh
                get anh() {
                    return this._anh;
                }
                set anh(v) {
                    this._anh = v;
                }
            };
            exports_1("Item", Item);
        }
    };
});
