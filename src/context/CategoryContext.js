import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// create context
export const CategoriesContext = createContext();


// provider content funtions and states
const CategoriesProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const callApi = async () => {

            try {
                
                const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const { data: { drinks } } = await axios.get(URL);
                setCategories(drinks);

            } catch (error) {
                console.error(error);
            }
        }

        callApi();

    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories,
                setCategories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;

