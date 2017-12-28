import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuotesService,
    private modalCtrl: ModalController) {
  }

  ionViewWillEnter(): void {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onViewQuote(quote: Quote): void {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quoteService.removeQuoteFromFavourites(quote);
        this.quotes = this.quoteService.getFavouriteQuotes();
      }
    });
  }

}
