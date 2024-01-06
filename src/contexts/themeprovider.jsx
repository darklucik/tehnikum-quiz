import React ,{useState, useEffect, useCallback, useMemo}from "react";
import {themecontext,Themes} from "./themecontext";


export const ThemeProvider = ({children}) => {
    const [ThemeValue, setThemeValue] = useState(Themes.light)
    useEffect(()=>{
        const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"))
        if(persistedTheme){
            setThemeValue(persistedTheme)
        }
    
    },[ThemeValue])

    const toggleTheme = useCallback(() => {
        setThemeValue((prevValue)=> prevValue===Themes.dark ? Themes.light : Themes.dark)
    }, [])

    const contextValue = useMemo(()=>{
        return ({
            Theme:ThemeValue,
            ToggleTheme:toggleTheme
        })
    },[ThemeValue,toggleTheme])


    return (
        <themecontext.Provider value={contextValue}>
            {children}
        </themecontext.Provider>
    )
}