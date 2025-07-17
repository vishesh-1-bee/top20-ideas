import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Header from './Header'
import Tabs from './Tabs'
import { useLocation } from 'react-router-dom'
import { Theamcontext } from '../context/Theamcontext'
import { db } from "../Utils/db"
import { idea } from '../Utils/Schema'
import { desc } from "drizzle-orm";
import Ideas from './Ideas'
const Home = () => {
  const params = useLocation()
  const [theamcontext, settheame] = useState("");
  const [list, setlist] = useState([]);

  //fetch the ddata from the db
  const getideas = async () => {
    const results = await db.select().from(idea)
      .orderBy(desc(params.hash == '#hot' || params.hash == '#top'
        ? idea.vote : idea.id
      ))
      .limit(10);
      setlist(results);
    console.log(results);

  }
  useEffect(() => {
    getideas()
    // setlist(results)
  }, [params])

  return (
    <div>
      <Theamcontext.Provider value={{ theamcontext, settheame }}>
        <div className=' w-[95%] p-2 sm:w-3/4 md:w-3/4 lg:w-1/2 mx-auto ' data-theme={theamcontext}>
          <Nav />
          <Header />
          <Tabs />
          <Ideas results={list} refreshData={getideas}/>
        </div>
      </Theamcontext.Provider>
    </div>
  )
}

export default Home
