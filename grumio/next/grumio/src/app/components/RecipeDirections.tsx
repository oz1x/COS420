'use client';
import RecipeStep from './RecipeStep';


const RecipeDirections = () => {
  return (
	<div>
	  <button className="btn btn-primary text-2xl m-4" onClick={() => console.log("Boop!")}>+</button>
	  <div className="bg-white rounded-lg">
		<RecipeStep/>
		<RecipeStep/>
	  </div>
	</div>
  )
}

export default RecipeDirections