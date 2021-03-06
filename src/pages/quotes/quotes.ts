import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { QuoteCategory } from '../../data/quoteCategory.interface';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteCategory: QuoteCategory;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService) {

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
            this.quoteService.addQuoteToFavourites(selectedQuote);
          }
        },

        {
          text: 'No thanks',
          role: 'cancel'
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavourites(selectedQuote: Quote): void {
    this.quoteService.removeQuoteFromFavourites(selectedQuote);
  }

  isQuoteFavourited(quote: Quote): boolean {
    return this.quoteService.isQuoteFavourited(quote);
  }
}
