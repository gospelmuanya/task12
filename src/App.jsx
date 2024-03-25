import React, { useState } from 'react';
import { internData } from './components/data';
import InternsDisplay from './components/InternsDisplay';



const App = () =>{
  const [inputSearch, setInputSearch] = useState('')
  const [searchResult, setSearchResult] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputSearch);
    let result = internData && internData.filter((res) => res.firstName.includes(inputSearch, -1))
    setSearchResult(result)
    console.log(result);
  }

  return (
    <>
      <header className="bg-blue-500 flex justify-between items-center w-full h-20 z-20 fixed">
        <h2 className="text-2xl text-white font-black py-4 px-10 font-['Arial']">
          Gospel's Intern Manager
        </h2>
        <form action="" onSubmit={handleSubmit} className="">
          <label htmlFor="" className="">
            <input type="text" className={`outline-0`} onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} />
          </label>
          <button className='text-white border border-white  px-2' type="submit">Search</button>
        </form>
      </header>
      <main className='flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center relative top-28'>
      { 
        searchResult !== '' && inputSearch?  searchResult.map((res, index)  => {
          return <InternsDisplay key={index} intern={res} interns={searchResult} />
        }):
        internData && internData.map((intern, index) => {
          return (
            <InternsDisplay key={index} intern={intern} interns={internData} />
          )
        })
      }
      
      </main>
    </>
  )
};

export default App;
