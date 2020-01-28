import { Component, OnInit } from '@angular/core';
import { products } from '../shared/models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {
  products: products[];
  selectStatusForm: FormGroup;
  submitted:boolean;
  status:string[];

  constructor() { 
    this.status = ['Available','No Stock','Not Enough item'];
    this.selectStatusForm = new FormGroup({
      status: new FormControl('',[Validators.required])
    });
    this.products = [
      new products('Calbee',2,'assets/calbee.jfif'),
      new products ('Ribena',1,'assets/ribena.jfif')
    ];
  }

  ngOnInit() {
  }
  done(){
    this.submitted = true;
  }

}
