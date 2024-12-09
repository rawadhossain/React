import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    /**
     * Challenge: grab the employment status from the form and log it
     * to the console. (Remember to select one of the radios before submitting)
     *
     * Note: This won't work the way you might expect quite yet!
     */

    function signUp(formData: any) {
        const email = formData.get('email');
        const password = formData.get('password');

        const empStatus = formData.get('employmentStatus');
        console.log(empStatus);

        const hobby = formData.getAll('hobby'); // returns an array of checked boxes
        console.log(hobby);
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    defaultValue="joe@schmoe.com"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                />

                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    defaultValue="password123"
                    type="password"
                    name="password"
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue="This is a description"
                ></textarea>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="unemployed" //to get which radio button is chosem, a value is needed
                        />
                        Unemployed
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="part-time"
                        />
                        Part-time
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                            value="full-time"
                        />
                        Full-time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="hobby"
                            value="Play" //to get which checkbox button is chosem, a value is needed
                        />
                        Play
                    </label>
                    <label>
                        <input type="checkbox" name="hobby" value="Game" />
                        Game
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="hobby"
                            defaultChecked={true} //optional if you want the default to be checked
                            value="Stream"
                        />
                        Stream
                    </label>
                </fieldset>

                <button>Submit</button>
            </form>
        </section>
    );
}
