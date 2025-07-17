import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Tabs = () => {
    const params = useLocation()
    const [active, setactive] = useState()
    useEffect(() => {
        setactive(params.hash)
    }, [params])
    console.log(active);

    return (
        <div className='mt-7 text-center border rounded-md '>
            <div role="tablist" className="flex  justify-evenly tabs items-center font-semibold ">
                <a role="tab" href='/#hot' className={`tab sm:text-xl ${active =="#hot" && 'tab-active'}`}>
                    <i class="ri-fire-fill  mr-1 text-amber-400"></i>Hot</a>
                <a role="tab" href='/#new' className={`tab sm:text-xl ${active =="#new" && 'tab-active'}`}>
                    <i class="ri-bard-fill  mr-1 bg-amber-500 bg-clip-text text-transparent"></i>New</a>
                <a role="tab" className={`tab sm:text-xl ${active =="#top" && 'tab-active'}`} href='/#top'>
                    <i class="ri-trophy-fill mr-1 bg-amber-500 bg-clip-text text-transparent"></i>Top</a>
            </div>
        </div>
    )
}

export default Tabs
