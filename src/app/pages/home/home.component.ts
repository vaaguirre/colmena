import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '../../services/categories.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    categories: Array<any>;

    constructor(
        private router: Router,
        private categoriesService: CategoriesService) { }

    ngOnInit() {
        this.categoriesService.getCategories().then(categories => this.categories = categories);
    }
    onSelect(category: Category) {
        this.router.navigate(['/categories', category.id]);
    }
}
