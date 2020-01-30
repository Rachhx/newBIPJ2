import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CrudService } from 'src/services/crud.service';
import { Product, CartService } from '../../../services/cart.service';
 
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  PName: string;
  PPrice: string;
 
  cart: Product[] = [];
 
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private crudService: CrudService) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
  console.log(this.cart) 
  }

CreateRecord() {
  let record = {};
  record['PName'] = this.PName;
  record['PPrice'] = this.PPrice;
  record['User'] = "12345abc";

  this.crudService.create_NewCart(record).then(resp => {
   console.log(this.cart) 
    console.log(resp);
  })
    .catch(error => {
      console.log(error);
    });
}
}