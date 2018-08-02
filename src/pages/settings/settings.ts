import {Component} from '@angular/core';
import{NavController, AlertController} from 'ionic-angular';
import {RedditService}  from '../../app/services/reddit.service';
import {ReditsPage } from '../redits/redits';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage{
  category:any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService, private alertCtl: AlertController){
    this.getDefaults();
  }
  getDefaults(){
    if(localStorage.getItem('category')!=null){
      this.category=localStorage.getItem('category');
    }else{
    this.category='sports';
    }

    if(localStorage.getItem('limit')!=null){
      this.limit=localStorage.getItem('limit');
    }else{
    this.limit=10;
    }
  }
  setDefaults(){
    localStorage.setItem('category',this.category);
    localStorage.setItem('limit',this.limit);
    // this.navCtrl.push(ReditsPage);
    this.presentAlert();
  }
  presentAlert(){
    let alert=this.alertCtl.create({
      title:"Defaults Updated",
      subTitle: 'Yhh man it deal wid!',
      buttons:['Zeen']
    });
    alert.present();
  }
}
