import React, {useState,useEffect} from 'react';

import Recipe from './Recipe';
import './styles.css';


function App() {

    //State used to fecth data
    const [recipes, setRecipes] =  useState([]);
    //State used to store user's input 
    const [search, setSearch] = useState("");
    //State used to fecth data according to the input provided by the user and just when the button search is clicked
    const [query,setQuery] = useState('chicken');


    useEffect(() => {
      getData();
    },[query]);
    
    async function getData(){

      const APP_ID = '6f0fa4d9';
      const APP_KEY = '879e533d27a247fb61ed056dc800df8d';
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);         
      
      const data = await response.json();
      setRecipes(data.hits);

      console.log(data.hits);

    }

    //Using arrow function to set the input search on the event onChange
    const setInputSearch= e => {      
      setSearch(e.target.value);
    }
  
    //Using arrow function to set the state query on the form event onSubmit
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');

    }

  return (
    <div className="app-container">

      <form className = "search-form" onSubmit={getSearch} >

        <input className="search-bar" type="text" value={search} onChange={setInputSearch}/>
        <button className = "search-button" type="submit">Search</button>

      </form>
      
        <div className="">
          {recipes.map(recipe =>(
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            picture={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthInfo={recipe.recipe.healthLabels}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
