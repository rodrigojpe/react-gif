
import { useState} from 'react';

export const AddCategory = ({onNewCategory}) => {


const [inputValue, setInputValue] = useState('One Push');

const onInputChange = (eve) => {
    setInputValue( eve.target.value);
}

const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    if (inputValue.trim().length <= 1) return;






    

    
    onNewCategory(inputValue.trim())
    // setCategories(categories => [inputValue,...categories]);
    setInputValue('');
}


    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}


