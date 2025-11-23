import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Managejobs = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full bg-white">
          
          <thead className="bg-gray-100 sticky top-0">
            <tr className="text-gray-700 text-sm">
              <th className="py-3 px-4 border-b border-gray-200 max-sm:hidden text-left">#</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Job Title</th>
              <th className="py-3 px-4 border-b border-gray-200 max-sm:hidden text-left">Date</th>
              <th className="py-3 px-4 border-b border-gray-200 max-sm:hidden text-left">Location</th>
              <th className="py-3 px-4 border-b border-gray-200 text-center">Applications</th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition text-sm text-gray-800"
              >
                <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden">
                  {index + 1}
                </td>

                <td className="py-3 px-4 border-b border-gray-200 font-medium">
                  {job.title}
                </td>

                <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden">
                  {moment(job.date).format("DD MMM, YYYY")}
                </td>

                <td className="py-3 px-4 border-b border-gray-200 max-sm:hidden">
                  {job.location}
                </td>

                <td className="py-3 px-4 border-b border-gray-200 text-center">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {job.applicants}
                  </span>
                </td>

                <td className="py-3 px-4 border-b border-gray-200">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-500 cursor-pointer"
                    defaultChecked={job.visible}
                  />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
       {/* Add Job Button */}
      <div className="flex justify-end my-4">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition cursor-pointer"
        >
          + Add Job
        </button>
      </div>
    </div>
  );
};

export default Managejobs;
