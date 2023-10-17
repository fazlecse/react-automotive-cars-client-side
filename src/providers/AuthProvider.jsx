import { createContext } from "react";

const AuthProvider = ({children}) => {
    const AuthContext = createContext(null);

    

    const AuthInfo={
    // user,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;