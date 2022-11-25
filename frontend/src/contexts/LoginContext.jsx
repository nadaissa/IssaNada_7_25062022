import { createContext, useState} from "react";


const LoginContext = createContext({});

export const LoginProvider = ({children}) => {
    const [loginAuth, setLoginAuth] = useState({});
    
    return (
        <LoginContext.Provider value={{ loginAuth, setLoginAuth }}>
        
        {children}

        </LoginContext.Provider>
    )
}

export default LoginContext;