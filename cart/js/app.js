System.register(["./manageitem.js", "./cartitem.js", "./managecartitem.js"], function (exports_1, context_1) {
    "use strict";
    var manageitem_js_1, cartitem_js_1, managecartitem_js_1, tatcaitem, shoppingcart, shop, sumitem, total, rightcart, restalert, buynow, i;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (manageitem_js_1_1) {
                manageitem_js_1 = manageitem_js_1_1;
            },
            function (cartitem_js_1_1) {
                cartitem_js_1 = cartitem_js_1_1;
            },
            function (managecartitem_js_1_1) {
                managecartitem_js_1 = managecartitem_js_1_1;
            }
        ],
        execute: function () {
            // khởi tạo sản phẩm
            tatcaitem = new manageitem_js_1.ManageItem();
            // khởi tạo giỏ hàng
            shoppingcart = new managecartitem_js_1.ManageCartItem();
            // full sản phẩm ra giao diện
            shop = document.getElementById('shop');
            shop.innerHTML = tatcaitem.showItem();
            // tổng số lượng sản phẩm
            sumitem = document.getElementById('sumitem');
            total = document.getElementById('total-cart');
            // thông tin tóm tắt giỏ hàng cột phải
            rightcart = document.getElementById('rightcart');
            // thông báo khi thêm sản phẩm vào giỏ hàng
            restalert = document.getElementById('rest-alert');
            // xử lý khi người dùng click nút mua hàng
            buynow = document.getElementsByClassName('buynow');
            for (i = buynow.length - 1; i >= 0; i--) {
                buynow[i].addEventListener('click', function () {
                    var idsp = this.getAttribute('data-idsp');
                    if (tatcaitem.getItemById(idsp) == 0) {
                        document.write("Lỗi dữ liệu, liên hệ congcc97@gmail.com để được hỗ trợ!");
                    }
                    else {
                        var itemclick = tatcaitem.getItemById(idsp);
                        // kiểm tra sản phẩm đã có trong giỏ hàng chưa, nếu chưa thì thêm vào, nếu có rồi thì tăng số lượng
                        if (shoppingcart.checkIndexOfItem(itemclick) == -1) {
                            var itemaddtocart = new cartitem_js_1.CartItem(itemclick, 1);
                            shoppingcart.addItemToCart(itemaddtocart);
                        }
                        else {
                            shoppingcart.addItemSecondClick(shoppingcart.checkIndexOfItem(itemclick));
                        }
                        // hiển thị thông báo đã thêm sản phẩm vào giỏ hàng
                        restalert.innerHTML = `<strong>${itemclick.ten}</strong> đã được thêm vào giỏ hàng`;
                        restalert.classList.add('show');
                        setTimeout(function () {
                            restalert.classList.remove('show');
                        }, 3000);
                        // hiển thị giỏ hàng trên giao diện
                        var cart = document.getElementById('cart');
                        cart.innerHTML = shoppingcart.showCart();
                        rightcart.innerHTML = shoppingcart.showCartRight();
                        sumitem.innerHTML = '<strong>Giỏ hàng</strong> (' + shoppingcart.countItem() + ' sản phẩm)';
                        total.innerHTML = '$ ' + shoppingcart.totalCart().toLocaleString();
                        // Xoá sản phẩm trong giỏ hàng
                        var itemremove = document.getElementsByClassName('remove-item');
                        for (var i = itemremove.length - 1; i >= 0; i--) {
                            itemremove[i].addEventListener('click', function () {
                                var itrm = tatcaitem.getItemById(this.getAttribute('data-idrm'));
                                shoppingcart.removeItem(shoppingcart.checkIndexOfItem(itrm));
                                // hiển thị giỏ hàng trên giao diện
                                cart.innerHTML = shoppingcart.showCart();
                                rightcart.innerHTML = shoppingcart.showCartRight();
                                sumitem.innerHTML = '<strong>Giỏ hàng</strong> (' + shoppingcart.countItem() + ' sản phẩm)';
                                total.innerHTML = '$ ' + shoppingcart.totalCart().toLocaleString();
                            });
                        }
                        // điều chỉnh số lượng trên giỏ hàng
                        var inputnumber = document.getElementsByClassName('inputnumber');
                        for (var i = inputnumber.length - 1; i >= 0; i--) {
                            inputnumber[i].addEventListener('change', function () {
                                shoppingcart.updateCart(this.getAttribute('data-idspgiohang'), parseInt(this.value));
                                cart.innerHTML = shoppingcart.showCart();
                                rightcart.innerHTML = shoppingcart.showCartRight();
                                sumitem.innerHTML = '<strong>Giỏ hàng</strong> (' + shoppingcart.countItem() + ' sản phẩm)';
                                total.innerHTML = '$ ' + shoppingcart.totalCart().toLocaleString();
                                // hiển thị thông báo đã cập nhật giỏ hàng
                                restalert.innerHTML = `<strong>Giỏ hàng đã cập nhật! Vui lòng kiểm tra lại</strong>`;
                                restalert.classList.add('show');
                                setTimeout(function () {
                                    restalert.classList.remove('show');
                                }, 3000);
                            });
                        }
                    }
                });
            }
        }
    };
});
