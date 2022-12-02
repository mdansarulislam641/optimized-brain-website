
const Option = ({option,handleCorrect,id,color}) => {
    return (
        <div className=' m-5 md:text-2xl flex items-center justify-center relative'>

       <input className="md:w-8 md:h-8 h-4 w-4 absolute left-1" type="radio" name={id} id={option} value={option} />
    <label className={`rounded-full md:py-3 py-2 cursor-pointer text-white font-mono font-extrabold block bg-red-400 w-full px-4`} onClick={()=>handleCorrect(option)} htmlFor={option}>
        {option}
    </label>
        </div>
    );
};

export default Option;