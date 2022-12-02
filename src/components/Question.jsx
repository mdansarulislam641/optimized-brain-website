import React, { useState } from 'react';
import Option from './Option';
import '../assets/Question.css';
import { EyeIcon ,EyeSlashIcon} from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const Question = ({questions,correct, setCorrect, wrong, setWrong,idx}) => {
    const {id, options, question, correctAnswer} = questions ;
       const [showCorrect, setshowCorrect] = useState(true );
    const handleCorrect = (answer)=>{
        if(correctAnswer === answer) {
            toast.success('Right Answer You Got 1 Marks!!!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:700
            });
            setCorrect(correct+1);
        
            return;
        }
        else{
            toast.warning('Wrong Answer Try Again !!!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:700
            });
            setWrong(wrong + 1);
        
          
        }
    }
    return (
        <div className='border-2 md:w-9/12 w-full mx-auto md:mt-10 mt-5 bg-[#f1f1f1] rounded py-2'>
            
            <h2 className='md:text-3xl text-2xl font-mono font-bold text-blue-800'>
                Ques No:{idx} {question}</h2>
           <div className='w-full text-right '>
          {
             showCorrect ?  <EyeIcon onClick={()=>setshowCorrect(!showCorrect)} className='w-10 h-10 inline mr-4'/> :
            <EyeSlashIcon onClick={()=>setshowCorrect(!showCorrect)} className='w-10 h-10 inline mr-4'/> 
          }
          <h2 className={` mr-5 md:text-2xl text-1xl ${showCorrect ? 'hidden' : 'block'}`}>{correctAnswer} </h2>
           </div>
           <div className='md:m-5 m-1 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
            {
                    options.map((option, idx)=><Option
                    key={idx}
                    id={id}
                        option={option}
                        handleCorrect={handleCorrect}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;