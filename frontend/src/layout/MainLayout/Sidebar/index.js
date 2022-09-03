import React from 'react'
import {Sidebar} from './components';

const index = ({ drawerOpen, drawerToggle, window, children }) => {
    return (
        <Sidebar>
            Sidebar
            {children}
        </Sidebar>
    )
}

export default index