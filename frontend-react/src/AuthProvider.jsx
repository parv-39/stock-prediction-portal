import { useState, createContext } from 'react';

//create the context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isloggedin, setIsloggedin] = useState(
        !!localStorage.getItem('access_token')
    );

    return (
        <AuthContext.Provider value={{ isloggedin, setIsloggedin }}>
            {children}      
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };

