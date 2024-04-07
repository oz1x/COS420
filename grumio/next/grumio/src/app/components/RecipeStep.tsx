'use client'
import React from 'react'

const RecipeStep = () => {
  return (
	<div className="border-2 rounded-lg border-black bg-white">
	  <button className="btn btn-primary text-2xl m-4 bg-red-800" onClick={() => console.log("Boop!")}>-</button>
	</div>
  )
}

export default RecipeStep
