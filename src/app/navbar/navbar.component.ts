import { Component, OnInit } from '@angular/core';
import { faHome, faColumns, faChartLine, faContactCard, faBlog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeIcon = faHome;
  columnsIcon = faColumns;
  chartLineIcon = faChartLine;
  contactCardIcon = faContactCard;
  blogIcon = faBlog
  constructor() { }

  ngOnInit(): void {
  }

}
