import React, { useState } from "react";

function RecipeView ( {recipes, setRecipes} ) {
 
  const deleteRecipe = (indexToDelete) => {
  setRecipes((recipes) =>
    recipes.filter((ignored, index) => index !== indexToDelete)
      );
    };
  
  const rows = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
      <tr key={index}> 
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo} alt={`photo of ${name}`}/></td>
      <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td><button name='delete' onClick={() => deleteRecipe(index)}>Delete</button></td>    
      </tr>
  ))
  return rows
}



export default RecipeView;