import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { orders } from '../shared/models/orders';
import { OrdersService } from '../shared/services/orders.service';
import { orderItem } from '../shared/models/orderItem';
import { orderItemTry } from '../shared/models/orderItemTry';
import { FirebaseOrderService } from '../shared/services/firebase-order.service';
import { orderTry } from '../shared/models/orderTry';
import { orderDetails } from '../shared/models/orderDetails';
import { OrderServiceService } from '../shared/services/order-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';



@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
  orderItems: orderItemTry[];
  order: orderTry[];
  orderDetails: orderDetails[];
  OrderA: any;

  orderDetail: any;
  orderItem: any;
  orderId: string;
  orders: Observable<any[]>;
  orderById: UserData[] = [];
  AcceptOrder: UserData;

  constructor(private orderService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private orderItemService: FirebaseOrderService,
    private orderServiceService: OrderServiceService,
    private authService: AuthService
  ) {
   
  }
  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderServiceService.getOrderByID(this.orderId).subscribe(res => {
      console.log('AcceptOrder: ', res)
      const user = new UserData(res.id,res.shopperEmail,res.name, res.status, res.mall);
      this.AcceptOrder = user;
      this.orderById.push(this.AcceptOrder);
      console.log('orderBYid: ', this.orderById)
    });
    // this.activatedRoute.params.subscribe(data => {
    //   this.orderServiceService.getOrderByID(data.id).subscribe(res => {
    //     console.log('res: ', res);
    //     this.AcceptOrder = res
    //     console.log('AcceptOrder: ', this.AcceptOrder)
    //     this.orderById = this.AcceptOrder;
    //     console.log('OrderById: ', this.orderById);
    // })
    // })
    // this.orderServiceService.getOrderById(this.orderId).subscribe(data => {
    //   this.orderDetail = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       CustName: e.payload.doc.data()['custName'],
    //       MallName: e.payload.doc.data()['mallName'],
    //       Status:e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log(this.orderDetail);
    // })

    //this.orderService.getOrderDetailsById(this.orderId).then(
    //result => this.orderDetails = result
    // );
    // this.orderItemService.getAllOrderItem().then(
    //   result => this.orderItems = result
    // );
    // this.orderItemService.getAllOrderActivity().then(
    //   result => this.order = result
    // );

    // this.orderServiceService.getAcceptOrder().subscribe(data => {
    //   this.AcceptOrder = data.map(e => {
    //     return{
    //     id: e.payload.doc.id,
    //     CustName: e.payload.doc.data()['custName'],
    //     MallName: e.payload.doc.data()['mallName'],
    //     DropOff: e.payload.doc.data()['dropOff'],
    //     Status: e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log(this.order);
    // });
    // this.orderServiceService.getAcceptedOrderInfo(this.orderId).subscribe(data => {
    //   this.orderDetail = data.map(e => {
    //     return {
    //       CustName: e.payload.doc.data()['custName'],
    //       MallName: e.payload.doc.data()['mallName'],
    //       Status: e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log("orderDetail: " + this.orderDetail);
    // })

    this.orderServiceService.getAcceptedOrderItem(this.orderId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          id: e.payload.doc.id,
          ItemName: e.payload.doc.data()['itemName'],
          ItemPrice: e.payload.doc.data()['itemPrice'],
          StoreName: e.payload.doc.data()['storeName'],
          Quantity: e.payload.doc.data()['quantity'],
          ItemImage: e.payload.doc.data()['itemImage']
        };
      })
      console.log("orderItem: " + this.orderItem);
    })
  }
  deleteorderitem(id) {
    this.orderServiceService.deleteOrderItem(this.orderId, id);
    console.log('ITEM DELETED!!');
  }
  updateStatus(status) {
    let OrderStatus = {};
    OrderStatus['status'] = 'Ready for Collection';
    this.orderServiceService.update_OrderStatus(status.id, OrderStatus);
  }
  updateSTATUS(status){
      let order = {};
      order['ShopperEmail'] = status.ShopperEmail;
      order['custName'] = status.custName;
      order['mallName'] = status.mallName;
      order['status'] = 'Ready for Collection';
      this.orderServiceService.updateStatus(status.id,order);
  }
  
}
