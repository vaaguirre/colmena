import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor() { }

  public getCategories() {
      return [
          {"name" : "Fontanero"},
          {"name" : "Cerrajero"},
          {"name" : "Jardinero"},
      ];
  }
}
