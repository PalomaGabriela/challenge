import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { 
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule 
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { EditCategoryDialogModule } from './edit-category-dialog/index';

@NgModule({
    imports: [
        CommonModule,
        EditCategoryDialogModule,
        FlexLayoutModule,
        MatButtonModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule 
    ],
    exports: [CategoryComponent],
    declarations: [CategoryComponent],
    providers: [],
})
export class CategoryModule { }
