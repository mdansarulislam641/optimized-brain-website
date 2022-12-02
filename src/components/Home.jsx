import React, { useContext } from 'react';
import { NoteContext } from '../Utilities/Main';
import Note from './Note';
const Home = () => {
    const notes = useContext(NoteContext);
    // console.log(notes)
    return (
        <div className="home-container  bg-[#FFF5E4]">
             <div className="px-4 py-16 mx-auto sm:max-w-9/12 md:max-w-9/12 lg:max-w-9/12 md:px-24 lg:px-8 lg:py-20 bg-[#2cd029c9]">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            
              You Can trying in this Quiz,,, So You Can OPTIMIZED Your BRAIN 
            </h2>
            <p className="text-2xl text-red-600 md:text-lg">
            Can You trying to your best , so you can win in the earth
            </p>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-purple-700  font-mono  text-2xl"
            >
              Let's Go Quiz 
            </a>
          </div>
        </div>
      </div>
    </div>

    
    <div className='grid md:grid-cols-2 w-9/12 m-auto gap-6 mt-20'>
          {
            notes.map(note=><Note 
                key={note.id}
                note={note}
            ></Note>)
          }
        </div>
        </div>




    );
};

export default Home;