import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter(): void {
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  onViewQuote(quote: Quote): void {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavourites(quote);
      }
    });
  }

  onRemoveFromFavourites(quote: Quote): void {
    this.quoteService.removeQuoteFromFavourites(quote);
    this.quotes = this.quoteService.getFavouriteQuotes();
  }

  showAlternativeBackground(): boolean {
    return this.settingsService.shouldShowAlternativeBackground();
  }

}
