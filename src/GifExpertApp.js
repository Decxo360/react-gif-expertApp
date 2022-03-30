import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const handleAdd = () => {
        setCategories([...categories, 'Naruto']);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}></AddCategory>
            <hr></hr>



            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />)
                }
            </ol>
        </div>

    )
}

export default GifExpertApp