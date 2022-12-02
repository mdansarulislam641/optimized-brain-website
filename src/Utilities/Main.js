import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
export const  NoteContext  =  createContext([]) 
const Main = () => {
    const {data} = useLoaderData();
   
    return (
        <div>
           <NoteContext.Provider value={data}>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
           </NoteContext.Provider>
        </div>
    );
};

export default Main;