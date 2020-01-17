import { Item } from "./item.js";
import { ManageItem } from "./manageitem.js";
import { CartItem } from "./cartitem.js";
import { ManageCartItem } from "./managecartitem.js";

// khởi tạo sản phẩm
var tatcaitem = new ManageItem();

// khởi tạo giỏ hàng
var shoppingcart = new ManageCartItem();

// full sản phẩm ra giao diện
var shop = document.getElementById('shop');
shop.innerHTML = tatcaitem.showItem();

// tổng số lượng sản phẩm
var sumitem = document.getElementById('sumitem');
var total = document.getElementById('total-cart');

// thông tin tóm tắt giỏ hàng cột phải
var rightcart = document.getElementById('rightcart');

// thông báo khi thêm sản phẩm vào giỏ hàng
var restalert = document.getElementById('rest-alert');

// xử lý khi người dùng click nút mua hàng
var buynow = document.getElementsByClassName('buynow');
for (var i = buynow.length - 1; i >= 0; i--) {
    buynow[i].addEventListener('click', function() {
        var idsp = this.getAttribute('data-idsp');
        if (tatcaitem.getItemById(idsp) == 0) {
            document.write("Lỗi dữ liệu, liên hệ congcc97@gmail.com để được hỗ trợ!");
        } else {
            var itemclick : Item = tatcaitem.getItemById(idsp);

            // kiểm tra sản phẩm đã có trong giỏ hàng chưa, nếu chưa thì thêm vào, nếu có rồi thì tăng số lượng
            if (shoppingcart.checkIndexOfItem(itemclick) == -1) {
                var itemaddtocart : CartItem = new CartItem(itemclick, 1);
                shoppingcart.addItemToCart(itemaddtocart);
            } else {
                shoppingcart.addItemSecondClick(shoppingcart.checkIndexOfItem(itemclick));
            }

            // hiển thị thông báo đã thêm sản phẩm vào giỏ hàng
            restalert.innerHTML = `<strong>${itemclick.ten}</strong> đã được thêm vào giỏ hàng`;
            restalert.classList.add('show');
            setTimeout(function(){
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
                itemremove[i].addEventListener('click', function(){
                    var itrm : Item = tatcaitem.getItemById(this.getAttribute('data-idrm'));
                    shoppingcart.removeItem(shoppingcart.checkIndexOfItem(itrm));
                    // hiển thị giỏ hàng trên giao diện
                    cart.innerHTML = shoppingcart.showCart();
                    rightcart.innerHTML = shoppingcart.showCartRight();
                    sumitem.innerHTML = '<strong>Giỏ hàng</strong> (' + shoppingcart.countItem() + ' sản phẩm)';
                    total.innerHTML = '$ ' + shoppingcart.totalCart().toLocaleString();
                })
            }

            // điều chỉnh số lượng trên giỏ hàng
            var inputnumber = document.getElementsByClassName('inputnumber');
            for (var i = inputnumber.length - 1; i >= 0; i--) {
                inputnumber[i].addEventListener('change', function(){
                    shoppingcart.updateCart(this.getAttribute('data-idspgiohang'), parseInt(this.value));
                    cart.innerHTML = shoppingcart.showCart();
                    rightcart.innerHTML = shoppingcart.showCartRight();
                    sumitem.innerHTML = '<strong>Giỏ hàng</strong> (' + shoppingcart.countItem() + ' sản phẩm)';
                    total.innerHTML = '$ ' + shoppingcart.totalCart().toLocaleString();

                    // hiển thị thông báo đã cập nhật giỏ hàng
                    restalert.innerHTML = `<strong>Giỏ hàng đã cập nhật! Vui lòng kiểm tra lại</strong>`;
                    restalert.classList.add('show');
                    setTimeout(function(){
                        restalert.classList.remove('show');
                    }, 3000);
                });
            }

        }
    })
}
