import { Component } from '@angular/core';

import quotes from "../../data/quotes";
import { QuotesPage } from '../quotes/quotes';
import { QuoteCategory } from '../../data/quoteCategory.interface';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection: QuoteCategory[];
  quotesPage = QuotesPage;

  constructor() {

  }

  ionViewDidLoad() {
    this.quoteCollection = quotes;
  }

}