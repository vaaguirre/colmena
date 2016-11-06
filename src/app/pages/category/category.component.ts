import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriesService, Category } from '../../services/categories.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    category: Category;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CategoriesService) { }


    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.service.getCategory(id).then(cat => this.category = cat);
        });
    }

}
