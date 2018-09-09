import { Source, Category, Month } from "./shared/index";

export interface Expense {

    months: Month,
    categories: Category,
    sources: Source
}