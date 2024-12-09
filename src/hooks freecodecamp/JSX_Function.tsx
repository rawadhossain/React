import { useState } from 'react';

function App() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addIngredient = (formData: FormData) => {
        const itemName = formData.get('item') as string;

        if (itemName.trim()) {
            setIngredients((prevIngredients) => [
                ...prevIngredients,
                itemName.trim(),
            ]);
            setInputValue(''); // Clear input after submission
        }
    };

    // JSX-generating function as a variable
    const ingredientsListItems = (
        <>
            {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-800">
                    {ingredient}
                </li>
            ))}
        </>
    );

    // JSX-generating function as a function
    const ingredientsListItems = () => {
        return ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-800">
                {ingredient}
            </li>
        ));
    };

    return (
        <>
            <div className="max-w-lg mx-auto mt-6 bg-white p-4 rounded-md shadow-md">
                <ul className="list-disc pl-5 space-y-1">
                    {ingredientsListItems} // Call the JSX-generating function
                    {ingredientsListItems()} // Call the JSX-generating function
                </ul>
            </div>
        </>
    );
}
