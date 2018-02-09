import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalDataSource} from 'ng2-smart-table';
import {RowActionsComponent} from './row-actions/row-actions.component';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html'
})

export class MainTableComponent implements OnInit {
  source: LocalDataSource;
  tableResponseParams: Object =  {
    start: 0,
    length: 999
  };

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
      },
      buttons: {
        title: 'Test Actions',
        filter: false,
        type: 'custom',
        renderComponent: RowActionsComponent
      }
    },
    attr: {
      class: 'ui table'
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
    // class: 'ui table'
  };

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.source = new LocalDataSource();
    this.loadTableData('http://api.localhost/channelspot/list');
  }

  loadTableData(path: string) {
    this.apiService.get(path, this.tableResponseParams).subscribe((response) => {
      this.source.load(response.data);
    });
  }

  ngOnInit() {

  }
}
