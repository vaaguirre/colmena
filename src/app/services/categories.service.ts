import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

    categories: Array<Category> = [
        {
            "id": "189IYS",
            "name": "Fontaneros",
            "contractors": [
                {
                    "_id": "581e9be7070bcd11a3cbb66a",
                    "contact": "Call me at 22334455",
                    "username": "elReyFulano",
                    "name": "Fulano de Tal",
                    "active": false,
                    "categories": [
                        "189IYS"
                    ],
                    "skills": []
                }
            ]
        },
        {
            "id": "109UYE",
            "name": "Cerrajeros",
            "contractors": []
        },
        {
            "id": "124KSJ",
            "name": "Jardineros",
            "contractors": []
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
    contractors: Array<Contractor>;
}

export class Contractor {

}