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
                    "contact": "22334455",
                    "username": "elReyFulano",
                    "name": "Fontanero Carlos Vasquez",
                    "active": false,
                    "rating": 4,
                    "categories": [
                        "189IYS"
                    ],
                    "skills": [
                        "Reparación de fugas y tuberías rotas",
                        "Destape de cañerías",
                    ]
                },
                {
                    "_id": "581e9be7070bcd11a3cbb66a",
                    "contact": "22334466",
                    "username": "elReyFulano",
                    "name": "Fontanero Juan Pérez",
                    "active": false,
                    "rating": 3,
                    "categories": [
                        "189IYS"
                    ],
                    "skills": [
                        "Reparación de fugas y tuberías rotas",
                        "Destape de cañerías",
                    ]
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