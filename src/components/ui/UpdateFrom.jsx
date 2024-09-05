'use client'
import React, { useState } from 'react';
const UpdateFrom = async({id}) => {

    const [fileName, setFileName] = useState()
    const [fileType, setFileType] = useState()
    const [assigned, setAssigned] = useState()
    const [status,setStatus] = useState()
    const [remaining, setRemaining] = useState()

    const updateDoc = {fileName,fileType,assigned,status,remaining}


    const handleUpdateDocument = (e) =>{
        e.preventDefault()
        console.log(updateDoc)
       
    }
    return (
        <div className='p-10'>
            <h2 className='text-center font-serif text-2xl mt-2 mb-4'>Update Document</h2>

            <form onSubmit={handleUpdateDocument}>
                <div className='md:flex gap-3'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">File Name</span>
                        </div>
                        <input
                          
                            onChange={(e) => setFileName(e.target.value)}
                            type="text"  className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">File Type</span>
                        </div>
                        <input
                        
                            onChange={(e) => setFileType(e.target.value)}
                            type="text" placeholder="File Type" className="input input-bordered w-full" required />

                    </label>
                </div>
                <div className='md:flex gap-3'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Assigned by</span>
                        </div>
                        <input
                           
                            onChange={(e) => setAssigned(e.target.value)}
                            type="text" placeholder="Assigned" className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">status</span>
                        </div>
                        <input
                        
                            onChange={(e) => setStatus(e.target.value)}
                            type="text" placeholder="Status" className="input input-bordered w-full" required />

                    </label>
                </div>

                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Remaining Days</span>
                        </div>
                        <input
                        
                            onChange={(e) => setRemaining(e.target.value)}
                            type="number" placeholder="Remaining" className="input input-bordered w-full" />

                    </label>

                </div>
                <input className='btn mt-5 bg-orange-400' type="submit" value="Update Document" />


            </form>
        </div>
    );
};

export default UpdateFrom;