import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IonContent, ActionSheetController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ChatService } from 'src/services/chat.service';
import { map, tap } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test-chat',
  templateUrl: './test-chat.page.html',
  styleUrls: ['./test-chat.page.scss'],
})
export class TestChatPage implements OnInit {

  messages: Observable<any[]>;
  newMsg = '';
  chatTitle = '';
  currentUserId = this.auth.currentUserId;
  chat = null;

  @ViewChild(IonContent, {static: false}) content: IonContent;
  @ViewChild('input', { read: ElementRef, static: false }) msgInput: ElementRef;


  constructor(
    private route: ActivatedRoute, 
    private auth: AuthService, 
    private chatService: ChatService, 
    private camera: Camera,
    private actionSheetCtrl: ActionSheetController,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.chatService.getOneChatGroup(data.id).subscribe(res => {
        this.chat = res;
        console.log('my chat: ', this.chat);
        this.messages = this.chatService.getChatMessages(this.chat.id).pipe(
          map(messages => {
            for (let msg of messages) {
              msg['user'] = this.getMsgFromName(msg['from']);
            }
            console.log('messages: ', messages);
            return messages;
          })
        );
      })
    })

  }

  getMsgFromName(userId) {
    for (let usr of this.chat.users) {
      if (usr.id == userId) {
        return usr.username;
      }
    }
    return 'Deleted';
  }

  sendMessage() {
    this.chatService.addChatMessages(this.newMsg, this.chat.id).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  resize() {
    this.msgInput.nativeElement.style.height = this.msgInput.nativeElement.scrollHeight + 'px';
  }
  sendFile() {
    this.galleryCamera();
  }

  async galleryCamera() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Open Gallery",
          handler: () => {
           this.launchGallery()
          }
        },
        {
          text: "Open Camera",
          handler: () => {
           this.launchCamera()
          }
        }
      ]
    }); await actionSheet.present();
  }

  launchGallery() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then(data => {

      let obj = this.chatService.addFileMessage(data, this.chat.id);
      let task = obj.task;

      task.then(res => {
        obj.ref.getDownloadURL().subscribe(url => {
          this.chatService.saveFileMessage(url, this.chat.id);
        })
      });

      task.percentageChanges().subscribe(change => {
        console.log('change: ', change);
      })
    });    
  }

  launchCamera() {
    let options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetHeight: 512,
      targetWidth: 512,
      allowEdit: true
    }

    this.camera.getPicture(options).then(data => {

      let obj = this.chatService.addFileMessage(data, this.chat.id);
      let task = obj.task;

      task.then(res => {
        obj.ref.getDownloadURL().subscribe(url => {
          this.chatService.saveFileMessage(url, this.chat.id);
        })
      });

      task.percentageChanges().subscribe(change => {
        console.log('change: ', change);
      })
    });    
  }

}