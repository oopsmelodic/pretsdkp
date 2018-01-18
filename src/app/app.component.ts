import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SuiSidebar} from 'ng2-semantic-ui/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar;
  ngAfterViewInit() {
    console.log(this);
  }
  blockSidebar() {
    this.sidebar.isVisible = true;
  }
}
