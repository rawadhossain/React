import React from 'react';

function DummyApp() {
    //older approach
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault(); // Prevents the default form reloading

        const formData = new FormData(event.target as HTMLFormElement); // Create a FormData object from the form
        const email = formData.get('email'); // Retrieve the email entered in the form
        // Gather the information from the form and submit it to a backend (not shown here)
        formData.set('', ''); // Reset the form fields
    }

    //react 19 approach
    function signup(formData: FormData) {
        const email = formData.get('email');
        // Gather the information from the form and submit it to a backend (not shown here)
        console.log(email);

        const password = formData.get('password');
        console.log(password);
    }

    return (
        <div>
            <h1>Signup Form</h1>
            {/* <form onSubmit={handleSubmit} method="post"> //older approach */}

            {/* Now we can set an action which automatically takes the data and sends it to the backend */}
            <form action={signup}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" />
                <br />
                <button type="submit">Submit</button>s
            </form>
        </div>
    );
}

DummyApp();
