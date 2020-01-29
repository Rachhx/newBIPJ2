import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test-cs',
  templateUrl: './test-cs.page.html',
  styleUrls: ['./test-cs.page.scss'],
})
export class TestCsPage implements OnInit {

  datas: Observable<any>

  constructor(
    private testSvc: TestService
    
  ) { }

  ngOnInit() {
    this.datas = this.testSvc.getDataByUser();
  }


}
