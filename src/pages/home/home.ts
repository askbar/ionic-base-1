import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list'
import { SongsApi } from '../../shared/shared'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songs:any; 

  constructor(public navCtrl: NavController, private songsApi: SongsApi) {
    this.songsApi.getSongs()
      .catch(function(e) {
        console.log(e); // "oh, no!"
      }).then(this.songs);
    
  }

  doStuff() {
    console.log(this.songs);
  }

  ionViewLoaded(){
    console.log("### ionViewLoaded ###");
  }
}
