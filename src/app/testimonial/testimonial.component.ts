import { Component, OnInit } from '@angular/core';
import {  faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  leftArrow = faChevronLeft;
  rightArrow = faChevronRight;
  constructor() { }

  ngOnInit(): void {
  }

}
