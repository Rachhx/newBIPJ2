import { Component, OnInit } from '@angular/core';
import { FirebaseOrderService } from '../shared/services/firebase-order.service';
import { orderItemTry } from '../shared/models/orderItemTry';
import { orderTry } from '../shared/models/orderTry';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../shared/services/orders.service';
import { OrderServiceService } from '../shared/services/order-service.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.page.html',
  styleUrls: ['./accept-order.page.scss'],
})
export class AcceptOrderPage implements OnInit {

  order: any;
  orderItem:any;
  orderItems : orderItemTry[];
  orders : orderTry[];
  oId: string;
  mallName: string;
  dropoff: string;
  orderId = null;
  orderDetails = {
    mallName : ''
  };
  orderDetail: any;
  

  orderStatus = {
    status: 'In Progress'
  };

  constructor(private orderItemService: FirebaseOrderService, 
    private activatedRoute: ActivatedRoute, 
    private orderService: OrderServiceService,
     private toastController: ToastController,
     private authService: AuthService) {

    this.oId = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit() {

    this.orderId = this.activatedRoute.snapshot.paramMap.get('id');

    const user = this.authService.getCurrentUser();
    console.log('user chk: ' + user.email);

   
    // if(this.oId){
    //  this.orderService.get_OrderById(this.oId).subscribe(res => {
    //     this.orderDetails = {
    //       mallName: res['mallName']
    //     }
    //   });
    // }
    // this.orderItemService.getAllOrderItem().then(
    //   result => this.orderItems = result
    // );
// if(this.oId){
//     this.orderService.get_OrderById(this.oId).subscribe(data => {
// // add if statement inside here???
// // this map got error cuz i put 'doc' instead of collection
//       this.order = data.map(e => {
//         return {
//           id:e.payload.doc.id,
//           MallName: e.payload.doc.data()['mallName'],
//           Name: e.payload.doc.data()['custName'],
//           Status: e.payload.doc.data()['status']
//         };
//       })
//       console.log(this.order);
//     });
//   }
  

    this.orderService.get_Orders().subscribe(data => {
      this.order = data.map(e => {
        return{
        MallName: e.payload.doc.data()['mallName'],
        DropOff: e.payload.doc.data()['dropOff']
        };
      })
      console.log(this.order);
    });

    this.orderService.get_OrdersItem(this.oId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          id: e.payload.doc.id,
          ItemName: e.payload.doc.data()['itemName'],
          ItemPrice: e.payload.doc.data()['itemPrice'],
          StoreName:e.payload.doc.data()['storeName'],
          Quantity:e.payload.doc.data()['quantity']
        };
      })
      console.log(this.orderItem);
    })
  }
  
    UpdateStatus(){
      let Status = {};
      if(this.orderId){
      this.orderService.update_OrderStatus(this.oId,this.orderStatus).then(() => {
        const toast = this.toastController.create({
          message: 'Order Status updated!',
          duration: 2000
        });
        toast.then(toast => toast.present());
        // this.addShopper();
      })
    }
  }

  addShopper(){
    const user = this.authService.getCurrentUser();
    let order = {};
    order['shopper'] = user.email;
    this.orderService.addShopper(this.oId,order).then(resp => {
      
    })

   }
      

    updateStatus(status){
      let OrderStatus = {};
      OrderStatus['status'] = 'In progress';
      this.orderService.update_OrderStatus(status.id,OrderStatus);

    }

  
    

    

    // this.orderItemService.getOrderById(this.oId).then(
    //   result => this.orders = result
    // );

    //  this.orderItemService.getAllOrder().then(
    //    result => this.orders = result
    //  );



  text = '';
  changeDStatus(){
   this.text = 'Declined!';
  }
  changeAStatus(){
  this.text = 'Accepted!';
  }

  


}
