import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import { db } from "../Utils/db"
import { idea } from '../Utils/Schema'
import moment from 'moment';
const New = () => {
    const [ideaas, setideaas] = useState()
    const [name, setname] = useState()
    const [meaasge, setmessage] = useState(false)
    const [userExist, setUseExist] = useState(false)

      useEffect(() => {
            if (localStorage.getItem("username")) {
                setname(localStorage.getItem("username"));
                setUseExist(true);
            }
        }, [])
    const handlesave = async () => {
        //logic to save the ideas
        const result = await db.insert(idea)
            .values({
                content: ideaas,
                username: name,
                createdAt: moment().format('DD MMM YYYY')
            }).returning({ id: idea.id })

        if (result) {
            localStorage.setItem('username', name)
            console.log("data set in the localstorage");
            setideaas('')
            setname(' ')
            setmessage(true);
            setTimeout(() => {
                setmessage(false)
            }, 3000);
        }

      

    }
    const navigate = useNavigate()
    return (
        <div className=' w-[95%] p-2 sm:w-full md:w-3/4 lg:w-1/2 mx-auto ' data-theme="">
            <Nav />
            <div className=" p-6 flex mt-4">
                <button  onClick={() => navigate("/")} className="btn btn-neutral bg-white btn-outline">
                    <i class="ri-arrow-left-wide-fill">Back</i>
                </button>
            </div>
            {meaasge && <div role="alert" className="alert alert-info mb-3 ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>New idea is added successfully</span>
            </div>}
            <h1 className=' w-[90%]  sm:w-[90%] md:w-full text-md sm:text-xl md:text-2xl lg:text-3xl text-center font-light tracking-tight'>From Concept to Creation : Empowering your startup Journey {" "}
            </h1>
            <div className='mt-9 flex flex-col gap-4'>
                <label htmlFor="">Your Ideas*</label>
                <textarea value={ideaas}
                    onChange={(e) => setideaas(e.target.value)}
                    className="textarea textarea-lg w-full textarea-info " placeholder="Type your idea"></textarea>
            </div>

            {
            !userExist && <div className='mt-4 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <label htmlFor="">Your Name*</label>
                    <label htmlFor="">No account needed*</label>
                </div>
                <input value={name}
                    type="text" onChange={(e) => setname(e.target.value)}
                    placeholder="Username" className="input w-full  mb-7 input-info" />
            </div>}
            <button className='btn mt-3 w-full btn-neutral' disabled={!(ideaas && name)}
                onClick={handlesave}>Send
                <i class="ri-send-plane-fill"></i>
            </button>
        </div>
    )
}

export default New
