import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../shared/services/order-service.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  completeOrder: Array<any>;

  constructor(private orderService: OrderServiceService) {
    this.orderService.readCompleteOrder().subscribe(res => {
      console.log('res: ', res);
      this.completeOrder = res;
    });
   }

  ngOnInit() {
  }

}
