import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { take, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    private storage: AngularFireStorage
  ) { }

  createTestData() {
    let current = {
      email: this.auth.currentUser.email,
      id: this.auth.currentUserId,
      username: this.auth.username
    };

    let allUsers = [current];
    return this.db.collection('testData').add({
      title: "testData",
      users: allUsers,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(res => {
      let promises = [];
      console.log(res.id)
      console.log(res)
      for (let usr of allUsers) {
        let oneAdd = this.db.collection(`users/${usr.id}/testData`).add({
          id: res.id,
        });
        promises.push(oneAdd);
      }
      return Promise.all(promises);
    })
  }

  getAllData() {
    return this.db.collection('testData').snapshotChanges().pipe(
      map(actions => actions.map (a => {
        const id = a.payload.doc.id;

        return { id };
      }))
    )
  }

  getDataByUser() {
    return this.db.collection(`users/${this.auth.currentUserId}/testData`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const user_group_key = a.payload.doc.id;
        return this.getDataById(data['id'], user_group_key);
      }))
    )
  }
 
  getDataById(id, user_group_key = null) {
    return this.db.doc(`testData/${id}`).snapshotChanges().pipe(
      take(1),
      map(changes => {
        const data = changes.payload.data();
        const group_id = changes.payload.id;
        return { user_group_key, id: group_id, ...(data as {})};
      })
    )
  }

  addData(dataId) {
    return this.db.collection('testData/' + dataId + '/data').add({
      available: "true",
      creatorId: this.auth.currentUserId,
      adminId: null,
      riderId: null,
      orderProgress: 'In Progress',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getIdData(groupId) {
    return this.db.collection(`testData/${groupId}/data`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...(data as {}) };
      }))
    )
  }

  updateAdmin(testDataId, dataId) {
    return this.db.doc(`testData/${testDataId}/data/${dataId}`).update({
      adminId: "615dXYjy0scFRlnUvDLq4sMLfhZ2",
    })
  }

  updateRider(testDataId, dataId) {
    return this.db.doc(`testData/${testDataId}/data/${dataId}`).update({
      riderId: this.auth.currentUserId,
    })
  }

  updateProgress(testDataId, dataId, progress) {
    return this.db.doc(`testData/${testDataId}/data/${dataId}`).update({
      orderProgress: progress
    })
  }
 


}
