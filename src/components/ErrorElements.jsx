import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImage from '../assets/images.png';
const ErrorElements = () => {
    const {status, statusText, statusMessage} = useRouteError();
    return (
        <div className=' flex items-center justify-center '>
           <div className=' mt-[200px]'>
           <h3 className="text-5xl font-semibold">
                Opp's SomeThing Is Wrong <br />
               <span className='text-red-700 text-4xl font-extrabold'>
               {statusText ? statusText : statusMessage}
                </span> <br />
                {status && <img className='ml-[190px]' src={errorImage } alt="" />}
            </h3>
           </div>
        </div>
    );
};

export default ErrorElements;
