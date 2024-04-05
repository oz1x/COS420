import React from 'react'
import RecipeDirections from '../components/RecipeDirections'

const RecipeCreationPage = () => {
  return (
	<div className="p-5 bg-orange-500 rounded-lg">
	  <div className="p-1">
	    <label>Recipe Name:</label>
	    <input type="text" id="recipename" name="recipename" required></input>
	  </div>
	  <div className="p-1">
	    <label>Tags:</label>
	    <input type="text" id="tagbox" name="tagbox"></input>
	  </div>
	  <div>
		<RecipeDirections/>
	  </div>
	</div>
  )
}

export default RecipeCreationPage
