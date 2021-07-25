import React, { Fragment } from 'react'
import { Sidebar } from './Sidebar';
import  { Tasks } from '../Tasks';


export const Content = () => {
    return (
        <Fragment>
            <section className="content">
                <Sidebar/>
                <Tasks/>
            </section>
        </Fragment>
    )
}


