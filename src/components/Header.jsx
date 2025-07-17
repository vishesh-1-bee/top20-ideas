import React, { useContext } from 'react'
import { Theamcontext } from '../context/Theamcontext';

const Header = () => {
    const {theamcontext, settheame}=useContext(Theamcontext)
    return (
        <div className=' flex justify-center items-center mt-8 sm:mt-[9%] md:mt-[8%] flex-col '>
            <h1 className=' w-[90%] sm:w-2/3 md:w-full text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>Top 20 Productive {" "}
                <span className='text-center'>ideas for your next startup</span>
            </h1>
            <h3 className='mt-4 text-center text-lg font-extralight'>Like yours favorites ideas.Write your best Ideas, No account needed!</h3>
            <div className='mt-4  text-center sm:w-full  '>
                <select 
                onChange={(e)=>{
                    settheame(e.target.value);
                    
                }}
                defaultValue="Pick a color" className="select border-dark text-start ">
                    <option disabled={true}>Choose Theame</option>
                    <option>select theme</option>
                    <option>synthwave</option>
                    <option>winter</option>
                    <option>lemonade</option>
                    <option>abyss</option>
                    <option>lofi</option>
                </select>
            </div>
        </div>
    )
}

export default Header
