import React from 'react';
import { Link } from 'react-router-dom';
const Note = ({note}) => {
    const {id, name, logo, total} = note;
    return (
        <div className='border-2 shadow-gray-600 rounded-md border-black bg-[#f1f1f1]'>
            <div className='md:h-[250px] h-[150px] text-center'>
                <img className='h-full w-full object-fill' src={logo} alt="Images Not Available" />

            </div>
            <div className='card-info m-5 text-2xl md:text-3xl h-[80px]'>
                <p> Topic : <span className='font-bold font-mono'> {name}</span> </p>
                <p> Total Quiz: <span className='font-extrabold font-mono'> {total}</span></p>
            </div>
            <Link to={`/quiz/${id}`}>
                <button className=' bg-blue-600 md:text-2xl text-1xl text-white  font-mono font-bold rounded-full py-3 px-10 w-9/12 mb-5'>
               Starts Quiz
                </button>
                </Link>
            
        </div>
    );
};

export default Note;