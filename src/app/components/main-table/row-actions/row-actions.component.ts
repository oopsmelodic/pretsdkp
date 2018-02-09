import {Component, Input, OnInit} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {ApiService} from '../../../services/api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './row-actions.component.html'
})
export class RowActionsComponent implements ViewCell, OnInit {
  renderValuePick: string;
  @Input() value: string | number;
  @Input() rowData: any;
  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.renderValuePick = 'Pick';
    console.log(this);
  }

  regSpot() {
    const regData: Object = {
      channelspot_id: this.rowData.id,
      users_id: 1,
      closed: 0,
      submit: 'submit',
      action: 'open'
    };
    this.apiService.post('http://api.localhost/regspot/create', regData).subscribe((response) => {
      console.log(response);
    });
  }

  pickSpot() {
    // alert('Pick: ' + this.rowData.channels_id + this.rowData.spots_id);
  }

}
