import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favouriteQuotes: Quote[] = [];

    addQuoteToFavourites(quote: Quote): void {
        this.favouriteQuotes.push(quote);
    }

    removeQuoteFromFavourites(quote: Quote): void {
        const position = this.favouriteQuotes.findIndex((item: Quote) => {
            return item.id === quote.id;
        });

        this.favouriteQuotes.splice(position, 1);
    }

    getFavouriteQuotes(): Quote[] {
        return this.favouriteQuotes.slice();
    }

    isQuoteFavourited(quote: Quote): boolean {
        const position = this.favouriteQuotes.findIndex((item: Quote) => {
            return item.id === quote.id;
        });

        return position >= 0;
    }
}