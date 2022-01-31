import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#slick1').slick({
      row:1,
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 100,
      slidesToShow: 2,
    });
  }

}
