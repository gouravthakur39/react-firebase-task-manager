import React, { Fragment } from 'react'
import { Sidebar } from './Sidebar';
import  { Tasks } from '../Tasks';
import { Checkbox } from '../Checkbox';


export const Content = () => {
    return (
        <Fragment>
            <section>
                <Sidebar/>
                <Tasks/>
            </section>
        </Fragment>
    )
}


