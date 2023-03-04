import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import ThemeProvider from "../contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
