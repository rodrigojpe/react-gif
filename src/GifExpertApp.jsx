import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);
    const AddCategories = (onNewCategory) => {



        if (categories.includes(onNewCategory)) return;

        setCategories([onNewCategory, ...categories]);

        // setCategories([cat => [...cat, 'Supermant']) ; 
        // setCategories(['Supermant',...categories]) ; 
    }




    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(val) => AddCategories(val)} />
            { categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))
            }
        </>
    );
}