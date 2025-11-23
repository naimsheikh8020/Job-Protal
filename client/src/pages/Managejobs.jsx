import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
const Managejobs = () => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Application</th>
              <th>Visible</th>
            </tr>
          </thead>
          <tobody>
            {
              manageJobsData.map((job, index)=>(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{job.title}</td>
                  <td>{moment(job.date).format('ll')}</td>
                  <td>{job.location}</td>
                  <td>{job.applicants}</td>
                  <td>
                    <input type='checkbox' />
                  </td>
                </tr>
              ))
            }
          </tobody>
        </table>
      </div>
    </div>
  )
}

export default Managejobs