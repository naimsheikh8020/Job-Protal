import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const Addjobs = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Bangalore')
  const [category, setCategory] = useState('Programming')
  const [level, setLevel] = useState('Beginner Level')
  const [salary, setSalary] = useState(0)
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  useEffect(()=>{
    // Initialize Quill only onece
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{
        theme: 'snow',
      })
    }
  },[])
  return (
    <div>
      <form className='container p-4 flex flex-col w-full items-start gap-3'>
        <div>
          <p>Job Title</p>
          <input type='text' placeholder='Type Here' onChange={e=> setTitle(e.target.value)} value={title} required/>
        </div>

        <div>
          <p>Job Description</p>
          <div ref={editorRef}>

          </div>
        </div>
        <div>
        {/* JOB CATEGORY */}
        <div>
          <p>Job Category</p>
          <select onChange={e => setCategory(e.target.value)}>
            {JobCategories.map((category, index)=>(
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {/* Job Location */}
        <div>
          <p>Job Location</p>
          <select onChange={e => setLocation(e.target.value)}>
            {JobLocations.map((location, index)=>(
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Job Level */}
        <div>
          <p>Job Category</p>
          <select onChange={e => setLevel(e.target.value)}>
            <option value="Beginner level">Beginner Level</option>
            <option value="Intermediate level">Intermediate Level</option>
            <option value="Senior level">Senior Level</option>
          </select>
        </div>

        {/* Salary */}
        <div>
          <p>Job Salary</p>
          <input onChange={e => setSalary(e.target.value)} type='Number' placeholder='25000'/>
        </div>
      </div>
      <button>Add</button>
      </form>
      
    </div>
  )
}

export default Addjobs