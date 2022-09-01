import React from 'react'
import {Sidebar} from './components';

const index = (props) => {
    return (
        <Sidebar>
            Sidebar
            {props.children}
        </Sidebar>
    )
}

export default index