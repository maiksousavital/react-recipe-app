import React from 'react';

//Destructuring props coming from App.js
const recipe = ({title, calories,picture,ingredients,healthInfo}) => {

return(

    <div className="recipe-container">

        <div className="picture">
            <h1>{title}</h1>
            <img className="" src={picture} alt=""/>
            <p><strong>Calories:</strong> {calories}</p>
        </div>

        <div className="ingredients">
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
        

        <div className="health-info">
            <h3>Health Info</h3>
            <ol>
                {healthInfo.map(info =>(
                    <li>{info}</li>
                ))}
            </ol>
        </div>

    </div>

)

}

export default recipe;