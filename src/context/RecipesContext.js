import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [valueForm, setValueForm] = useState({
        name: '',
        category: ''
    });

    const [saveResultRecipes, setSaveResultRecipes] = useState({
        isAvailable: false,
        data: []
    });


    useEffect(() => {

        const callApi = async () => {
            try {

                const { name, category } = valueForm;
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

                const data = await axios.get(URL);

            } catch (error) {
                setSaveResultRecipes({
                    isAvailable: false,
                    data: [],
                    err:'result not found'
                })
            }
        }

        callApi();

    }, [valueForm])

    return (
        <RecipesContext.Provider
            value={{
                setValueForm,
                setSaveResultRecipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )

}


export default RecipesProvider;