import { Main } from "next/document";
import React from "react";
import { Sidebar } from "./Sidebar";
import { SideMenu } from "./SideMenu";

export const FlexBox: React.FC = () => {
    return (
        <React.Fragment>
            <SideMenu></SideMenu>
            <Sidebar></Sidebar>
            <Main></Main>
        </React.Fragment>
    );
};
