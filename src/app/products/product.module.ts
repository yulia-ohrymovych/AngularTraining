import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent }
        ])
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule { }
