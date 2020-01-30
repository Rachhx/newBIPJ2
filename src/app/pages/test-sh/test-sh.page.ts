import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { TestService } from '../../../services/test.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-test-sh',
  templateUrl: './test-sh.page.html',
  styleUrls: ['./test-sh.page.scss'],
})
export class TestShPage implements OnInit {

  datas: any;

  constructor(
    private testSvc: TestService,

  ) { }

  ngOnInit() {
    // this.datas = this.testSvc.getAllData();
    console.log("dsdasda" + this.datas)
    this.datas = this.testSvc.getDataByUser();
  }


}
