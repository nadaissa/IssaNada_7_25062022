import { Outlet } from "react-router";
import { LoginProvider } from "./LoginContext";

const ContextLayout = () => {
    return (
       <LoginProvider>
        <Outlet/>

       </LoginProvider>
    )
}

export default ContextLayout