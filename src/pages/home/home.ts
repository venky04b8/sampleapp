import {Component, enableProdMode} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { SqlitePage } from '../sqlite/sqlite';

enableProdMode();
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private callNumber: CallNumber,private theInAppBrowser: InAppBrowser) {

  }

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  launchDialer(n:string){
    // this.callNumber.callNumber(n, true)
    //     .then(() => console.log('Launched dialer!'))
    //     .catch(() => console.log('Error launching dialer'));
    setTimeout(() => {
      window.open(`tel:${n}`, '_system');
    },100);
  }
  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openSqlitePage()
  {
    this.navCtrl.push(SqlitePage)
  }

}
