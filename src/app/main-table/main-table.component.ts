import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LocalDataSource} from 'ng2-smart-table';
import {Regspot} from '../model/regspot';
import {log} from 'util';
import {Http} from '@angular/http';
import {ApiResponse} from '../model/api-response';

interface Response {
  start: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: any;
}

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html'
})
export class MainTableComponent implements OnInit {
  source: LocalDataSource;
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      channels_id: {
        title: 'Channel',
        filter: false,
      },
      spots_id: {
        title: 'Spot',
        filter: false,
      },
      time_stamp: {
        title: 'Time Create',
        filter: false
      }
    },
    attr: {
      class: 'ui table'
    }
    // class: 'ui table'
  };

  constructor(private http: HttpClient) {
    this.source = new LocalDataSource();
    this.http.get<Response>('http://api.localhost/channelspot/list?start=0&length=9999').subscribe(response => {
      console.log(response.data);
      this.source.load(response.data);
    });
  }

  ngOnInit() {

  }
}
