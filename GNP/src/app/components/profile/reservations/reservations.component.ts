import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, Observer } from 'rxjs';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { ExampleTab } from '../../home-page/home-page.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  asyncTabs!: Observable<ExampleTab[]>;
  selectedReservation:any;
  IndexOfTabProduct:any;
  tabChangeEvent:any;
  constructor( private data: ShareDataService) { }

  ngOnInit(): void {
    this.data.getIndexOfTabProduct()
    this.IndexOfTabProduct =  this.data.getIndexOfTabProduct()
    this.selectedReservation = this.IndexOfTabProduct.value;
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'current', content: 'Content 1' },
          { label: 'previous', content: 'Content 2' },
          { label: 'expired', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    this.tabChangeEvent = tabChangeEvent.index;
    this.data.setIndexOfTabProduct(this.tabChangeEvent);
  }


}
