import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Hunter x Hunter'])

    const handleAdd = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories,]);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory handleAdd={event=>handleAdd(event)}></AddCategory>
            <hr></hr>


            <ol>
                {
                    categories.map((category,index) =>
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