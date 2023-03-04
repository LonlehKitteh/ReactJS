import React, { useState, useContext } from "react";

type modes = "light" | "dark";

type ThemeContextType = {
    backgroundColor: string;
    textColor: string;
    mode: modes;
};

const themeDefaultValues: ThemeContextType = {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    mode: "light",
};

const ThemeContext = React.createContext<{
    theme: ThemeContextType;
    updateTheme: () => void;
}>({
    theme: themeDefaultValues,
    updateTheme: Function,
});

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeContextType>(themeDefaultValues);
    function updateTheme() {
        if (theme.mode === "light")
            setTheme({
                backgroundColor: "#000000",
                textColor: "#ffffff",
                mode: "dark",
            });
    }

    return (
        <ThemeContext.Provider
            value={{ theme: theme, updateTheme: updateTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
