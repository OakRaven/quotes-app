import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(private viewCtrl: ViewController) {

  }

  ionViewWillEnter(): void {
    this.person = this.viewCtrl.data.person;
    this.text = this.viewCtrl.data.text;
  }

  onClose(remove = false): void {
    this.viewCtrl.dismiss(remove);

  }
}
