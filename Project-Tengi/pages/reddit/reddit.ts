import { Component } from '@angular/core';
import { RedditService } from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();

  }

  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }

  getDefaults(){
  if(localStorage.getItem('category') != null){
    this.category = localStorage.getItem('category');

  } else {
    this.category = 'sports';

  }
  if(localStorage.getItem('limit') != null){
    this.category = localStorage.getItem('limit');

  } else {
    this.limit = 15;
    }
}

  getPosts(category, limit){
    this.redditService.getPosts(category, limit).subscribe(response => {
    this.items = response.data.children;
    });

}
  viewItem(item){
    this.navCtrl.push(DetailsPage, {
    item:item
    });

  }

  changeCategory(){
    this.getPosts(this.category, this.limit)

  }
}
