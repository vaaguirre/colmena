import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

    categories: Array<Category> = [
        {
            "id": "189IYS",
            "name": "Fontanero"
        },
        {
            "id": "109UYE",
            "name": "Cerrajero"
        },
        {
            "id": "124KSJ",
            "name": "Jardinero"
        },
    ];

    constructor() { }

    public getCategories() {
        return new Promise<Array<Category>>((resolve, reject) => {
            resolve(this.categories);
        });
    }

    public getCategory(id: string) {
        return new Promise<Category>((resolve, reject) => {
            resolve(this.categories.filter(cat => cat.id == id)[0]);
        });
    }
}

export class Category {
    id: string;
    name: string;
}
