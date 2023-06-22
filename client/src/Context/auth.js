/*import { token } from 'morgan'*/
import {useState,useEffect,useContext,createContext} from 'react';
const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:" "
    });
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};
//custome hooks
const useAuth= () => useContext(AuthContext);
export {useAuth,AuthProvider};