import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const DefaultScreen = () => {
    const { autoSignin } = useContext(AuthContext);
    useEffect(() => {
        autoSignin();
    }, []);

    return null;
};

export default DefaultScreen;