import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-env',
  templateUrl: './test-env.page.html',
  styleUrls: ['./test-env.page.scss'],
})
export class TestEnvPage implements OnInit {

  constructor(
    private testSvc: TestService,
    private db: AngularFirestore,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  testData(){
    this.testSvc.createTestData();
    console.log("Test Data created.")
  }

}
