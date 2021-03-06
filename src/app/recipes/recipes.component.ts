import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './Recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.recipesService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }

}
