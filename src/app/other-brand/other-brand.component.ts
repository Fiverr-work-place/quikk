import { Component, OnInit } from '@angular/core';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-other-brand',
  templateUrl: './other-brand.component.html',
  styleUrls: ['./other-brand.component.css']
})
export class OtherBrandComponent implements OnInit {
  plusIcon = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
