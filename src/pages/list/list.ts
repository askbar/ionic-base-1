import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SongsApi } from '../../shared/shared'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  tag: string;
  songs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private songsApi: SongsApi) {
    this.tag = navParams.data;
  
    this.songsApi.getSongs()
    .then(data => this.songs = data)
    .catch(function(e) {
      console.log(e);
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
