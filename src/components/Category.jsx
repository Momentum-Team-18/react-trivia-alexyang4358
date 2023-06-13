import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Quiz from './Quiz'


function Category() {
    const URL = 'https://opentdb.com/api_category.php'
    const [categories, setCategories] = useState([])
    const [categoryID, setCategoryID] = useState()
    
    
    useEffect(() => {
    axios.get(URL).then((response) => setCategories(response.data.trivia_categories))}, [])
    
    const handleCategoryID = (id) => {
        setCategoryID(id)
    }
    
    console.log(categories)
    console.log(categoryID)

    return (
    <>
        <div>
            <h2>Please Pick a Trivia Category</h2>
            {categories.map(category => (
                <ul key={category.id}>
                    <button onClick = {() => handleCategoryID(category.id)}>{category.name}</button>
                </ul>
            ))}
            {categoryID && <Quiz categoryID={categoryID}/>}
        </div>
    </>
    )
}

export default Category

// update/refresh state of quizes when button is clicked
// display <Quiz /> properl
//     return (
    // categoryID ? <Quiz categoryID={categoryID} /> : ( 

    // )