import { createContext } from "react";

export const Themes = {
    light: "light",
    dark: "dark",
}

const InitialState= {
    theme:Themes.light,
    ToggleTheme:()=>{}

}



export default themecontext = createContext(InitialState)




















