import { useState } from 'react';

function DummyApp() {
    const [contact, setcontact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isFav: true,
    });

    const star = 10;
    const unstar = 20;

    let setFav = contact.isFav ? star : unstar;

    const toggleFav = () => {
        //three ways to set state having the previous state and the new state
        setcontact(() => ({ ...contact, isFav: !contact.isFav }));

        setcontact((prevContact) => ({
            ...prevContact,
            isFav: !prevContact.isFav,
        }));

        setcontact(() => {
            return { ...contact, isFav: !contact.isFav };
        });
    };

    return (
        <>
            <button onClick={toggleFav}>{setFav}</button>
        </>
    );
}

DummyApp();
