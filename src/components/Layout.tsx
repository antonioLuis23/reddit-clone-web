import React from 'react'
import { NavBar } from './NavBar';
import { Wrapper, WrapperVariant } from './Wrapper';


interface LayoutProps {
    variant?: WrapperVariant;
}
const Layout: React.FC<LayoutProps> = ({children, variant}) => {
    return (
      <React.Fragment>
        <NavBar/>

        <Wrapper variant = {variant}>
            {children}
        </Wrapper>
      </React.Fragment>
    )
}

export default Layout;
