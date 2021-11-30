import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test pizza', 'Test for delicious pizza', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal2-1542822781.png'),
    new Recipe('Test pasta', 'Test for delicious pasta', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/masala-pasta-500x500.jpg')
  ];

  getRecipes() {
    //slice skapar ny array av servicearrayen, dvs man kan inte ändra arrayen i servicen utifrån
    return this.recipes.slice();
  }
}
