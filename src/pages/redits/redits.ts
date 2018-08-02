import {Component} from '@angular/core';
import{NavController} from 'ionic-angular';
import {RedditService}  from '../../app/services/reddit.service';
import {DetailsPage } from '../details/details';

@Component({
  selector: 'page-redits',
  templateUrl: 'redits.html'
})
export class ReditsPage{
  items:any;
  category:any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService){
    this.getDefaults();
    console.log("Defaults read");
  }
  ionViewDidEnter() {
    console.log("I'm alive!");
    this.getDefaults();
  }
  ngOnInit(){
    console.log('oninit');
    this.getPosts(this.category,this.limit);
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
  getPosts(category,limit){
    this.redditService.getPosts(category,limit).subscribe(response=>{
      console.log(response);
      this.items=response.data.children;
    });
  }
  viewItem(item){
    this.navCtrl.push(DetailsPage,{
      item:item
    });
  }
  changeCategory(){
    this.getPosts(this.category,this.limit);
    console.log(this.category);
  }
}
