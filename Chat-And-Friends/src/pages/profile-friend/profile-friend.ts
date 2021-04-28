import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Friend} from "../../models/user";
import {Util} from "../../providers/util/util";



@IonicPage()
@Component({
  selector: 'page-profile-friend',
  templateUrl: 'profile-friend.html',
})



export class ProfileFriendPage {

  public Util = Util;
  private profile: Friend = new Friend();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.profile = this.navParams.get('friend');
  }

  goToChatRoom() {
    this.navCtrl.push('ChatRoomPage', {friend: this.profile});
  }

}
