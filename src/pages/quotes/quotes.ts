import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';

import { QuoteCategory } from '../../data/quoteCategory.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteCategory: QuoteCategory;

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    this.quoteCategory = this.navParams.data;
  }

}
