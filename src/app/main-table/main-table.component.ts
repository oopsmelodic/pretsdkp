import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Regspot} from '../model/regspot';
import {log} from 'util';
import {LocalDataSource} from 'ng2-smart-table';
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
      name: {
        title: 'Full Name',
        filter: false,
      },
    },
    attr: {
      class: 'ui table'
    }
    // class: 'ui table'
  };

  constructor(private http: HttpClient) {
    this.source = new LocalDataSource();
    this.http.get<Response>('http://api.localhost/channels/list?start=0&length=10').subscribe(response => {
      log(response.data);
      this.source.load(response.data);
    });
  }

  ngOnInit() {

  }
}
