import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoryContext'
import { RecipesContext } from '../context/RecipesContext';

export const Form = () => {


    const { categories } = useContext(CategoriesContext);

    const { setValueForm } = useContext(RecipesContext);


    const [error, setError] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        category: ''
    })

    const { name, category } = formValues;

    const handleChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim().length < 1 || category.trim().length < 1) return setError(true);

        setValueForm(formValues);
        setError(false);
    }

    return (
        <> 
        { 
         error &&
         <div className="alert-error" >Insert All Fields</div>
         }
            <form
                className="col-12"
                onSubmit={handleSubmit}
            >
                <div className="row mt-3">
                    <div className="col-md-4">
                        <input
                            name="name"
                            type="text"
                            className="form-control mb-3"
                            placeholder="Ingredients"
                            autoComplete="off"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-4">
                        <select
                            name="category"
                            className="form-control mb-3"
                            value={category}
                            onChange={handleChange}
                        >
                            <option value="" disabled >Select Category</option>
                            {
                                categories.map((categorie, idx) => (
                                    <option
                                        value={categorie.strCategory}
                                        key={idx}
                                    >
                                        { categorie.strCategory}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="col-md-4">

                        <button type="submit" className="btn-search">Search Recipes</button>
                    </div>
                </div>
            </form>
        </>
    )
}
