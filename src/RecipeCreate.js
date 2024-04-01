import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const [recipeForm, setRecipeForm] = useState({});
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
   
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({...initialFormState})
  }
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tfoot>
          <tr>
            <td>
              <label htmlFor="name">
                <input placeholder='Name' type='text' name="name" value={formData.name} onChange={handleChange}/>
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input placeholder='Cuisine' type='text' name="cuisine" value={formData.cuisine} onChange={handleChange}/>
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input placeholder='URL' type='text' name="photo" value={formData.photo} onChange={handleChange}/>
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea placeholder='Ingredients' type='text' name='ingredients' value={formData.ingredients} onChange={handleChange}/>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea placeholder='Preparation' type='text' name='preparation' value={formData.preparation} onChange={handleChange}/>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default RecipeCreate;
