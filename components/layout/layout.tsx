import React, { Fragment, ReactNode } from 'react';
import MainNav from "./main-nav"

//Typescript Interface for props
interface LayoutProps {
    children: ReactNode;
}

//Wrapper component that goes into _app.js to add the navbar
const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <Fragment>
            <MainNav />
            <main>{children}</main>
        </Fragment>
    )

}

export default Layout;