import React from 'react';

const App = () => {
    const items = [
        { id: 1, info: 'Item 1' },
        { id: 2, info: 'Item 2' },
        { id: 3, info: 'Item 3' },
        { id: 4, info: 'Item 4' },
        { id: 5, info: 'Item 5' },
    ];

    return <ItemList items={items} />;
};

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.info}</li>
            ))}
        </ul>
    );
};

export default App;
