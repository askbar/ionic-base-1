import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SongsApi {

    // get https://sing-along-10e39.firebaseio.com/songs.json
    private baseUri = 'https://sing-along-10e39.firebaseio.com'
    constructor(private http: Http) {

    }

    getSongs() {
        return new Promise(resolve => {
            console.log('dddd');
        
            this.http.get(`${this.baseUri}/songs.json`)
                .subscribe(res => resolve(res.json()));
        })
    }
}