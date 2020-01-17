System.register([], function (exports_1, context_1) {
    "use strict";
    var ManageCartItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ManageCartItem = class ManageCartItem {
                constructor() {
                    this.CartItems = [];
                    // code...
                }
                addItemToCart(item) {
                    this.CartItems.push(item);
                }
                checkIndexOfItem(item) {
                    for (var i = this.CartItems.length - 1; i >= 0; i--) {
                        if (this.CartItems[i].item.id == item.id) {
                            return i;
                        }
                    }
                    return -1;
                }
                addItemSecondClick(index) {
                    this.CartItems[index].soluong += 1;
                }
                updateCart(idspgiohang, soluongmoi) {
                    for (var i = this.CartItems.length - 1; i >= 0; i--) {
                        if (this.CartItems[i].item.id == idspgiohang) {
                            this.CartItems[i].soluong = soluongmoi;
                        }
                    }
                }
                removeItem(index) {
                    this.CartItems.splice(index, 1);
                }
                countItem() {
                    var tongsoluong = 0;
                    for (var i = this.CartItems.length - 1; i >= 0; i--) {
                        tongsoluong += this.CartItems[i].soluong;
                    }
                    return tongsoluong;
                }
                totalPriceOfItem(index) {
                    var total = 0;
                    total += (this.CartItems[index].item.gia * this.CartItems[index].soluong);
                    return total;
                }
                totalCart() {
                    var totalcart = 0;
                    for (var i = this.CartItems.length - 1; i >= 0; i--) {
                        totalcart += (this.CartItems[i].item.gia * this.CartItems[i].soluong);
                    }
                    return totalcart;
                }
                showCart() {
                    var showCartHTML = ``;
                    if (this.CartItems.length != 0) {
                        for (var i = this.CartItems.length - 1; i >= 0; i--) {
                            showCartHTML += `
                      <tr>
                        <th scope="row">
                          <img src="${this.CartItems[i].item.anh}" alt="" class="img-fluid z-depth-0">
                        </th>
                        <td>
                          <h5 class="mt-1">
                            <strong>${this.CartItems[i].item.ten}</strong>
                          </h5>
                          <p class="text-muted">${this.CartItems[i].item.nsx}</p>
                        </td>
                        <td>$${this.CartItems[i].item.gia.toLocaleString()}</td>
                        <td>
                          <input type="number" data-idspgiohang="${this.CartItems[i].item.id}" value="${this.CartItems[i].soluong}" aria-label="Search" class="form-control inputnumber" style="width: 80px;margin: 0px;padding: 0px;">
                        </td>
                        <td class="font-weight-bold">
                          <strong>$${this.totalPriceOfItem(i).toLocaleString()}</strong>
                        </td>
                        <td>
                          <button type="button" class="btn btn-sm btn-danger remove-item" data-toggle="tooltip" data-idrm="${this.CartItems[i].item.id}" data-placement="top"
                            title="Remove item"><i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                `;
                        }
                        return showCartHTML;
                    }
                    return `Giỏ hàng chưa có sản phẩm nào`;
                }
                showCartRight() {
                    var showCartRightHTML = ``;
                    if (this.CartItems.length != 0) {
                        for (var i = this.CartItems.length - 1; i >= 0; i--) {
                            showCartRightHTML += `
                    <dl class="row">
                      <dd class="col-sm-8">
                        ${this.CartItems[i].item.ten} <small>(x${this.CartItems[i].soluong})</small>
                      </dd>
                      <dd class="col-sm-4">
                        $ ${this.totalPriceOfItem(i).toLocaleString()}
                      </dd>
                    </dl>

                    <hr>
                `;
                        }
                        showCartRightHTML += `
                <dl class="row">
                    <dd class="col-sm-12">
                        Mã giảm giá/Voucher
                    </dd>

                    <dd class="col-sm-8">
                        <!--address-->
                        <input type="text" id="voucher" class="form-control" placeholder="Nhập vào đây" style="border: 1px solid #eaeaea; font-size: 14px; padding: 0px; border-radius: 5px; padding-left: 8px;">
                    </dd>
                    <dd class="col-sm-4" style="padding: 0px;">
                        <button class="btn btn-primary btn-sm" style="font-size: 1rem; padding: .5rem 1.6rem; margin: 3px;" type="submit">Ok</button>

                    </dd>
                </dl>
                <hr style="margin-top: 0px;">
            `;
                        return showCartRightHTML;
                    }
                    return `Chưa có sản phẩm để tính tiền`;
                }
            };
            exports_1("ManageCartItem", ManageCartItem);
        }
    };
});
