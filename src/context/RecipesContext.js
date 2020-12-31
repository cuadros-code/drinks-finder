import { createContext, useEffect, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [valueForm, setValueForm] = useState({});

    const [saveResultRecipes, setSaveResultRecipes] = useState([]);


    useEffect(() => {
    
    }, [])

    return(
        <RecipesContext.Provider
            value={{
                setValueForm
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )

} 


export default RecipesProvider;