import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { QuoteCategory } from '../../data/quoteCategory.interface';
import { Quote } from '../../data/quote.interface';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteCategory: QuoteCategory;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.quoteCategory = this.navParams.data;
  }

  onAddToFavourites(selectedQuote: Quote): void {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Clicked yes');
          }
        },

        {
          text: 'No thanks',
          role: 'cancel',
          handler: () => {
            console.log('Clicked no');
          }
        }
      ]
    });

    alert.present();
  }
}
