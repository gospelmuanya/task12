import React, { useEffect, useState } from 'react';
import Male from '../images/male.jpg'
import Female from '../images/female.jpg'

function InternsDisplay({intern, interns}) {
    const [selectedIntern, setSelectedIntern] = useState()
    const [show, setShow] = useState(false)
    const [averageScore, setAverageScore] = useState()
    const [totalScore, setTotalScore] = useState()
  
    useEffect(() => {
      let sum = selectedIntern?.grades?.reduce((total, grade) => total + grade,0);
    let average = Number(sum / selectedIntern?.grades?.length).toFixed(2)
  
    setTotalScore(sum)
    setAverageScore(average)
    console.log(sum);
    }, [selectedIntern])
  
    const handleClick = (id, e) => {
      let profile = interns.filter((data)=> data.firstName === id)
      setSelectedIntern(profile[0])
  
      if(selectedIntern?.grades) {
        setShow(true)
        console.log('button clicked!', show);
      } else {
        setShow(false)
      }
    }
  

    const {firstName, lastName, gender, learningPath, state} = intern
  return (
    <>
        <ul className='flex flex-col mb-6 border px-8 py-4 shadow-lg rounded-lg'>
            <li className='flex flex-col items-center'>
            <img src={gender === 'male'? Male : Female} 
            alt="portrait" 
            className="w-20 h-20 rounded-full border-2 border-blue-300 "/>
            <h1 className='uppercase font-semibold text-xl'>{firstName} {lastName}</h1>
            <small className="capitalize">
                Learning Path : {learningPath}
            </small>
            </li>

            <li  className='mb-4'>
            <h2 className='font-medium text-lg pt-4 pb-1'>Intern's Information</h2>
            <div className="">
                <h5 className="">
                Gender : {gender}
                </h5>
                <h5 className="">
                State of Origin : {state}
                </h5>
            </div>
            </li>
            <button className="pb-1 bg-blue-400 text-white capitalize rounded-md w-32 self-center" onClick={(e)  => handleClick(firstName, e)}>
            view grades
            </button>
        </ul>

        <div className={` ${!show? "hidden": 'before:fixed before:left-0 before:bg-black/50  before:block before:w-screen before:h-screen before:top-0 before:z-40'}`}>
        <div className="fixed left-4 w-80 h-96 md:left-80 top-28 bg-white md:w-1/2 md:h-96 rounded-lg px-8 py-4 z-50">
          <h1 className="flex justify-between items-center font-medium">
            <span className="flex flex-col">
              {selectedIntern?.firstName + " " + selectedIntern?.lastName}
              <small className="text-sm font-light">{selectedIntern?.learningPath}</small>
            </span>
            <span onClick={() => setShow(false)} className='text-red-500 cursor-pointer text-2xl'>&times;</span>
          </h1>

          <div className="tasks">
            <h5 className="text-center">Tasks & Scores</h5>
            <div className="grid grid-cols-1 gap-1 py-2 px-4">
              {selectedIntern?.grades?.map((grade, index) => {
                return (
                  <ul key={index} className="text-sm">
                    <li className="flex justify-between items-center border-b-2">
                      <div className="">
                        Task-{index+1}
                      </div>
                      <div className="font-semibold">
                        {grade}
                      </div>
                    </li>
                </ul>
                )
              })}
            </div>
            <div className="flex space-x-4 justify-center">
              <span className="text-sm">Total Score: <small className="font-bold text-base">{totalScore}</small></span>
              <span className="text-sm">Average: <small className="font-bold text-base">{averageScore}</small></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InternsDisplay