import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { TestService } from '../../services/test.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { TestCsCollectionPage } from '../../modals/test-cs-collection/test-cs-collection.page';

@Component({
  selector: 'app-test-cs-order',
  templateUrl: './test-cs-order.page.html',
  styleUrls: ['./test-cs-order.page.scss'],
})
export class TestCsOrderPage implements OnInit {

  groups: Observable<any>;

  users = [];
  title = '';
  participant = '';
  
  currentUserId = this.auth.currentUserId;
  data = null;
  dataSet: Observable<any[]>;

  dataId = null;
  createdAdmin = null;
  creadtedRider = null;
  adminId = null;
  riderId = null;
  orderProgress = null;
  username = null;
  availability = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private chatSvc: ChatService,
    private route: ActivatedRoute,
    private testSvc: TestService,
    private db: AngularFirestore,
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.testSvc.getDataById(data.id).subscribe(res => {
        this.data = res;

        console.log(this.data)
        this.dataSet = this.testSvc.getIdData(this.data.id).pipe(
          map(dataSet => {
            for (let data of dataSet) {
              data['user'] = this.getDataFromName(data['creatorId']);
              this.dataId = data['id'];
              this.username = data['user'];
              this.adminId = data['adminId'];
              this.riderId = data['riderId'];
              this.orderProgress = data['orderProgress'];
              this.availability = data['available'];

              if(this.adminId == null) {
                this.updateAdmin()
                this.adminChat()
              }
              console.log(this.availability)
              console.log(this.dataId);
              console.log(this.adminId);
              console.log(this.riderId);
              console.log(this.orderProgress);
            }
            console.log(dataSet)
            return dataSet;
          })
        )
      })
    })

    this.groups = this.chatSvc.getChatGroups();
    console.log(this.groups);


  }

  updateAdmin() {
    this.testSvc.updateAdmin(this.data.id, this.dataId);
  }

  getDataFromName(userId) {
    for (let usr of this.data.users) {
      if (usr.id == userId) {
        return usr.username;
      }
    }
    return 'Deleted';
  }

  addData() {
    this.testSvc.addData(this.data.id);
  }

  adminChat() {
      // this.title = "Admin Chat + " + this.username;
      this.title = "Admin Chat"
      let obs = this.chatSvc.findPerson('OTW_Admin');
      forkJoin(obs).subscribe(res => {
        console.log('Res: ', res);
        for(let users of res) {
          if (users.length > 0) {
            console.log("Users: ", users)
            this.users.push(users[0]);
          }
        }
        this.createGroup();
      })
  }

  // riderChat() {
  //   this.title = "RiderChat";
  //   let obs = this.chatSvc.findPerson(this.participant);
  //   forkJoin(obs).subscribe(res => {
  //     console.log('Res: ', res);
  //     for(let users of res) {
  //       if (users.length > 0) {
  //         console.log("Users: ", users)
  //         this.users.push(users[0]);
  //       }
  //     }
  //     this.createGroup();
  //   })
  // }

  createGroup() {
    this.chatSvc.createGroupChat(this.title, this.users)
      .then(res => {
        console.log(res)
      })
  }

  async openModal() {

    if(this.orderProgress == "In Progress") {

    } else if(this.orderProgress == "Ready for Collection") {
      const modal = await this.modalCtrl.create({
        component: TestCsCollectionPage,
      });
      return await modal.present();    
    }
    
  }

  




}
