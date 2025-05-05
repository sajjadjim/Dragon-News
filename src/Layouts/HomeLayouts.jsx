import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import LeatestNew from '../Components/LeatestNew'
import NavBar from '../Components/NavBar'
import LeftAside from '../Components/HomeLayout/LeftAside'
import RightAside from '../Components/HomeLayout/RightAside'

function HomeLayouts() {
    return (
        <div>
            <Header></Header>
            <LeatestNew></LeatestNew>
            <nav>
                <NavBar></NavBar>
            </nav>
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                    </aside>
                <section className='main col-span-6'>
                <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    )
}

export default HomeLayouts
