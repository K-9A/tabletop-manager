import React, { Fragment, ReactNode } from 'react';
import { MainNav } from "./main-nav"

//Typescript Interface for props
interface LayoutProps {
    children: ReactNode;
}

//Wrapper component that goes into _app.js to add the navbar
const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <Fragment>
            <div className="pt-4 pb-4 sticky top-0 z-50">
                <MainNav />
            </div>
            <main>{children}</main>
        </Fragment>
    )

}

export default Layout;