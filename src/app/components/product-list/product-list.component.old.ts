import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list', // The component selector used in HTML
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css'], // The styles associated with this component
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  // Declare currentCategoryId as number | null
  currentCategoryId: number | null = 1; // Default value can be null or any valid category ID

  previousCategoryId: number | null = 1; // Default value can be null or any valid
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 8;
  theTotalElements: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute, 
    private cartService: CartService
  ) {
    this.currentCategoryId = 1; // initialize with default category ID
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }
  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe((data) => {
      this.products = data;
    });
  }

  handleListProducts() {
    // check if "id" param is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap?.has('id');

    if (hasCategoryId) {
      // get the 'id' param string. convert string to a number using the + symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // no category id available ... default to category id null
      this.currentCategoryId = null;
    }

    // Check if we have a different category then previous
    // Note: Angular will reuse a component if it is currently being viewed

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(
      `currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`
    );

    // get products based on the given category id or no category id
    this.productService
      .getProductListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId as number
      )
      .subscribe((data) => {
        this.processResult(data);
      });
  }
  processResult(data: {
    _embedded: { products: Product[] };
    page: { number: number; size: number; totalElements: number };
  }) {
    this.products = data._embedded.products;
    this.thePageNumber = data.page.number + 1;
    this.thePageSize = data.page.size;
    this.theTotalElements = data.page.totalElements;
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }
}
