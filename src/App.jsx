import React, { useState, createContext } from 'react';
import { usePostTitle } from './hooks/usePostTitle';
import './App.css';

const App = () => {
    const PostTitle = usePostTitle();

    return <div>{PostTitle}</div>;
};

export default App;
