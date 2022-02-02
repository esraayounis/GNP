import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthententicationService } from 'src/app/core/services/authententication.service';
import { ShareDataService } from 'src/app/core/services/share-data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = true;
  isLoggedIn$!: Observable<boolean>;
  @Input() screenTitleEn! : String;
  @Input() screenTitleAr! : String;

  curLang: any;
  mycurrentLangu: any;
  myLoogedUser: any;
  displayUSer = false;
  lang = "arabic";
  langCheckerAr = false;
  langCheckerEn = true;
  isLoggedIn:any;
  currentRoute: string="";
  showCollapseMenu = false;


  constructor(private router: Router, public authService: AuthententicationService,
    private translateService: TranslateService,  @Inject(DOCUMENT) private document: Document,
    private cdRef: ChangeDetectorRef,  private data: ShareDataService,
    @Inject(DOCUMENT) private _document: Document) 
   { 
      this.currentRoute = router.url;
      this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = event.url;          
        console.log( this.currentRoute)
        let activeRoute = this.currentRoute.substring(1);
        if(activeRoute == 'profile')
        {
          this.showCollapseMenu = true;
        }
        else{
          this.showCollapseMenu = false;
        }
        console.log(activeRoute);
      })
      let myStorage = window.localStorage;
      this.mycurrentLangu = myStorage.getItem("currentLanguage");
      console.log(this.mycurrentLangu)
      this.translateService.setDefaultLang(this.mycurrentLangu);
      let htmlTag = this.document.getElementsByTagName(
        "html"
      )[0] as HTMLHtmlElement;
      htmlTag.dir = this.mycurrentLangu === "Arabic" ? "rtl" : "ltr";
      this.changeCssFile(this.mycurrentLangu);
  }

  changeLangage(lang: string) {
    if (lang == "Arabic") {
      this.langCheckerAr = false;
      this.langCheckerEn = true;
    } 
    else if (lang == "English") {
      this.langCheckerAr = true;
      this.langCheckerEn = false;
    }
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "Arabic" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
    this.data.changeCurrentLanguage(lang);
    let myStorage = window.localStorage;
    myStorage.setItem("currentLanguage", lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      "head"
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      "langCss"
    ) as HTMLLinkElement;

    let bundleName = lang === "Arabic" ? "arabicStyle.css" : "englishStyle.css";

    if (existingLink) {
      existingLink.href = bundleName;
    } 
    else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

  ngAfterViewChecked() {
    
    let myStorage = window.localStorage;
    this.myLoogedUser = myStorage.getItem("authenticatedUSer");
    if (this.myLoogedUser == null) {
      this.displayUSer = false;
    } 
    else {
      this.displayUSer = true;
      this.myLoogedUser = myStorage.getItem("authenticatedUSer");
    }
    this.cdRef.detectChanges();
  }


  ngOnInit(): void {
    let loggedInUser = localStorage.getItem("authenticatedUSer");
    if (loggedInUser != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    // console.log( this.isLoggedIn$)
  }

  onLogout(){
    // this.authService.logout();
    this.isLoggedIn = false;
    window.localStorage.removeItem("authenticatedUSer");
    window.localStorage.removeItem("userToken");
    localStorage.clear();
    localStorage.setItem("currentLanguage", "Arabic");
    this.displayUSer = false;
    this._document.defaultView?.location.reload();
    this.router.navigate(["/"]);
  }


  signUp() {
    let UserId = localStorage.getItem("UserId");
    if (UserId == null) {
      this.router.navigate(["/sign-up"]);
      this.isLoggedIn = false;
    } else {
      this.router.navigate(["/home"]);
      this.isLoggedIn = true;
    }
  

    // this.isAuthenticated = false;
  }

  login() {
    let UserId = localStorage.getItem("UserId");
    if (UserId == null) {
      this.router.navigate(["/login"]);
      this.isLoggedIn = false;
    } else {
      this.router.navigate(["/home"]);
      this.isLoggedIn = true;
    }
  
    // this.isAuthenticated = false;
  }

  goHome(){
    this.router.navigate(["/home"]);
  }

}
