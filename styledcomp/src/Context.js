import React, { useContext,useReducer } from "react";
import { createContext } from "react";
import Reducers from "./Reducer";
const Appcontext = createContext();
const initialState = {
    name: "",
    images: ""
};

 
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducers, initialState);

    const UpdateHomePage = () => {
        return dispatch(
            {
                type: "Home_Update",
                payload: {
                    name: "Pradeep Developer",
                    images: "./images/971.jpg",
                },
            }
        )
    }

    const UpdateAboutPage = () => {
        return dispatch(
            {
                type: "About_Update",
                payload: {
                    name: "Softwere Processing",
                    images: "./images/about.jpg"
                },
            }
        )
    }



   
    return (
        <Appcontext.Provider value={{ ...state, UpdateHomePage, UpdateAboutPage }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobaleContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider, useGlobaleContext };