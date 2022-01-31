import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private indexProductSource = new BehaviorSubject('');
  indexProductPrefilled = this.indexProductSource.asObservable();

  private langSource = new BehaviorSubject('Arabic');
  currentCustomLanguage = this.langSource.asObservable();

  setIndexOfTabProduct(indexProduct: any) {
    this.indexProductSource.next(indexProduct)
  }
  getIndexOfTabProduct() {
    return this.indexProductSource 
  }

  changeCurrentLanguage(curLang: any) {
    this.langSource.next(curLang)
  }
}
