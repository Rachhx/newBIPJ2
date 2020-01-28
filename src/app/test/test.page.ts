import { Component, OnInit } from '@angular/core';
import { orders } from '../shared/models/orders';
import { orderTry } from '../shared/models/orderTry';
import { FirebaseOrderService } from '../shared/services/firebase-order.service';
import { OrderServiceService } from '../shared/services/order-service.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  order: orderTry[];

  acceptedOrders: Array<any>
  activatedRoute: any;
  orderServiceService: any;
  AcceptOrder: any;
  orderById: any;

  constructor(private orderItemService: FirebaseOrderService,
    private orderService: OrderServiceService,
    private auth: AuthService) {
    const user = this.auth.getCurrentUser();
    this.orderService.getAcceptedOrder(user.email).subscribe(res => {
      console.log('res: ', res);
      this.acceptedOrders = res;
    });
  }

  ngOnInit() {
    // this.orderItemService.getAllOrderActivity().then(
    //   result => this.order = result
    // );
    //   }


  }
  returnfield(){
    this.activatedRoute.params.subscribe(data => {
      this.orderServiceService.getOrderById(data.id).subscribe(res => {
 
         console.log('res: ', res);
 this.AcceptOrder = res;
 this.orderById = this.AcceptOrder;
     
  
         console.log('OrderById: ', this.orderById);
     })
   })
  }
}
