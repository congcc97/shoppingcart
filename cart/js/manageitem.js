System.register(["./item.js"], function (exports_1, context_1) {
    "use strict";
    var item_js_1, ManageItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (item_js_1_1) {
                item_js_1 = item_js_1_1;
            }
        ],
        execute: function () {
            ManageItem = class ManageItem {
                // vì không có csdl nên sẽ tự thêm bằng tay
                constructor() {
                    this.products = [];
                    // code...
                    var item1 = new item_js_1.Item(1, 'iMac', 'Apple', 1299, true, 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/3.jpg');
                    this.addItem(item1);
                    var item2 = new item_js_1.Item(2, 'iPhone XS', 'Apple', 1199, true, 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg');
                    this.addItem(item2);
                    var item3 = new item_js_1.Item(3, 'Alien', 'Dell', 1499, true, 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/4.jpg');
                    this.addItem(item3);
                    var item4 = new item_js_1.Item(4, 'Notebook 2', 'Asus', 1799, false, 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg');
                    this.addItem(item4);
                }
                getItems() {
                    return this.products;
                }
                getItemById(idsp) {
                    for (var i = this.products.length - 1; i >= 0; i--) {
                        if (this.products[i].id == idsp) {
                            return this.products[i];
                        }
                    }
                    return 0;
                }
                addItem(item) {
                    this.products.push(item);
                }
                showItem() {
                    var showItemsHTML = '';
                    if (this.products.length != 0) {
                        for (var i = this.products.length - 1; i >= 0; i--) {
                            showItemsHTML += `
                <!-- Grid column -->
              <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">

                <!-- Card -->
                <div class="card card-ecommerce id-${this.products[i].id}">

                  <div class="view overlay">
                    <img src="${this.products[i].anh}" class="img-fluid" alt="sample image">
                    <a>
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div class="card-body p-1">

                    <h5 class="card-title mb-1"><strong><a class="dark-grey-text">${this.products[i].ten}</a></strong></h5>
                    <span class="badge badge-danger mb-2">${this.products[i].nsx}</span>

                    <ul class="rating">
                      <li>
                        <i class="fas fa-star blue-text"></i>
                      </li>
                      <li>
                        <i class="fas fa-star blue-text"></i>
                      </li>
                      <li>
                        <i class="fas fa-star blue-text"></i>
                      </li>
                      <li>
                        <i class="fas fa-star blue-text"></i>
                      </li>
                      <li>
                        <i class="fas fa-star grey-text"></i>
                      </li>
                    </ul>

                    <div class="card-footer pb-0">
                      <div class="row mb-0">
                        <span class="float-left">
                          <strong>${this.products[i].gia.toLocaleString()}$</strong>
                        </span>
                        <span class="float-right">
                        `;
                            if (this.products[i].tinhtrang == true) {
                                // code...
                                showItemsHTML += `
                                <button data-toggle="tooltip" data-placement="top" title="Thêm vào giỏ hàng" class="btn btn-block btn-primary mt-1 mb-1 buynow" data-idsp="${this.products[i].id}">
                                    <i class="fas fa-shopping-cart"></i> Mua hàng
                                </button>
                            `;
                            }
                            else {
                                // code...
                                showItemsHTML += `
                                <button data-toggle="tooltip" data-placement="top" title="Thêm vào giỏ hàng" class="btn btn-block btn-danger mt-1 mb-1" data-idsp="${this.products[i].id}">
                                    <i class="fas fa-exclamation-triangle disabled"></i> Hết hàng
                                </button>
                            `;
                            }
                            showItemsHTML += `
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
                <!-- Card -->

              </div>
              <!-- Grid column -->
                `;
                        }
                        return showItemsHTML;
                    } //end if clause
                    return `Cửa hàng đang được cập nhật...`;
                }
            };
            exports_1("ManageItem", ManageItem);
        }
    };
});
