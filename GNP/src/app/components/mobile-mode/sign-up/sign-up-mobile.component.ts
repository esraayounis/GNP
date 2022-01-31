import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { ExampleTab } from '../../home-page/home-page.component';

@Component({
  selector: 'app-sign-up-mobile',
  templateUrl: './sign-up-mobile.component.html',
  styleUrls: ['./sign-up-mobile.component.css']
})
export class SignUpMobileComponent implements OnInit {
  
  asyncTabs!: Observable<ExampleTab[]>;
  selectedComponent:any;
  IndexOfTabProduct:any;
  tabChangeEvent:any;

  constructor(private router:Router, private data: ShareDataService) { }

  ngOnInit(): void {
    this.data.getIndexOfTabProduct()
    this.IndexOfTabProduct =  this.data.getIndexOfTabProduct()
    this.selectedComponent = this.IndexOfTabProduct.value;
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'register', content: 'Content 1' },
          { label: 'login', content: 'Content 2' },
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
