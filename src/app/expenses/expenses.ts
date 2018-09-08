import { Month } from "./month";
import { Category } from "./category";
import { Source } from "./source";

export interface Expense {

    months: Month,
    categories: Category,
    sources: Source
}