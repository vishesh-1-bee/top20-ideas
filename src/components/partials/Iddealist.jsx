import React from 'react'
import { db } from '../../Utils/db'
import { idea } from '../../Utils/Schema'
import { eq } from 'drizzle-orm'
import { downvotes, upvote } from '../../Service'

const Iddealist = ({ ideaa, index, refreshData }) => {
  const upvotehandle = async () => {
    if (upvote(ideaa.id)) {
      const result = await db.update(idea)
        .set({ vote: ideaa.vote + 1 }).where(eq(ideaa.id, idea.id))
        .returning({ id: idea.id })

      if (result) {
        refreshData()
      }
    }

  }

  const downvoteHandler = async () => {
    if (downvotes(ideaa.id)) {
      const dresult = await db.update(idea)
        .set({ vote: ideaa.vote - 1 })
        .where(eq(idea.id, ideaa.id))
        .returning({ id: idea.id })

      if (dresult) {
        refreshData()
      }
    }

  }
  return (
    <div className='  bg-slate-800 p-9 rounded-md   mt-9 border shadow-lg border-neutral-400 ' >
      <div className=' flex '>
        <span>{index + 1}</span>
        <h1 className='w-[90%] ml-2 mr-4'>{ideaa.content}</h1>
        <div className='space-y-2 flex flex-col justify-center p-3 '>
          <h2 className='hover:bg-slate-400 rounded-lg size-6 text-center duration-200 '>
            <i class="ri-thumb-up-fill text-amber-400" onClick={() => upvotehandle()}></i></h2>
          <h2 className='ml-1'>{ideaa.vote}</h2>
          <h2 className='hover:bg-slate-400 rounded-lg size-6 text-center duration-200'>
            <i class="ri-thumb-down-fill text-amber-400" onClick={() => downvoteHandler()}></i></h2>
        </div>

      </div>
      <div className='flex items-center ml-3'>
        <h3 className='text-neutral-400 text-xs sm:text-sm'>Created by @{ideaa.username} at {ideaa.createdAt}</h3>
      </div>
    </div>
  )
}

export default Iddealist
