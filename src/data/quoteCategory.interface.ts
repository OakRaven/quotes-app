import { Quote } from "./quote.interface";

export interface QuoteCategory {
    category: string;
    quotes: Quote[];
    icon: string;
}