import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import quotes from "../../data/quotes";
import { QuotesPage } from '../quotes/quotes';
import { QuoteCategory } from '../../data/quoteCategory.interface';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: QuoteCategory[]

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  onCategoryClick(category: QuoteCategory): void {
    this.navCtrl.push(QuotesPage, category);
  }

}