'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddDocument = () => {

    const router = useRouter()

    const [fileName, setFileName] = useState('')
    const [fileType, setFileType] = useState('')
    const [assigned, setAssigned] = useState('')
    const [status,setStatus] = useState('')
    const [remaining, setRemaining] = useState('')


    const document = {fileName,fileType,assigned,status,remaining}

    const handleAddDocument = e =>{
        e.preventDefault()
        console.log(document)

      const res = axios.post('https://plandentall-server.vercel.app/documents',document)
        .then( res =>{
            if(res?.data?.acknowledged){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${fileName} added`,
                    showConfirmButton: false,
                    timer: 1500
                  });
              router.refresh()
              router.push('/profile/documents')
            }
        })
    }
    return (
        <div className='p-10'>
            <h2 className='text-center font-serif text-2xl mt-2 mb-4'>Add Document</h2>

            <form onSubmit={handleAddDocument}>
                <div className='md:flex gap-3'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">File Name</span>
                        </div>
                        <input
                        onChange={(e)=>setFileName(e.target.value)}
                        type="text" placeholder="File Name" className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">File Type</span>
                        </div>
                        <input
                         onChange={(e)=>setFileType(e.target.value)}
                        type="text" placeholder="File Type" className="input input-bordered w-full" required />

                    </label>
                </div>
                <div className='md:flex gap-3'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Assigned by</span>
                        </div>
                        <input
                         onChange={(e)=>setAssigned(e.target.value)}
                        type="text" placeholder="Assigned" className="input input-bordered w-full" required />

                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">status</span>
                        </div>
                        <input
                         onChange={(e)=>setStatus(e.target.value)}
                        type="text" placeholder="Status" className="input input-bordered w-full" required />

                    </label>
                </div>

                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Remaining Days</span>
                        </div>
                        <input
                         onChange={(e)=>setRemaining(e.target.value)}
                        type="number" placeholder="Remaining" className="input input-bordered w-full" />

                    </label>
                   
                </div>
                <input className='btn mt-5 bg-orange-400' type="submit" value="Add Document" />


            </form>
        </div>
    );
};

export default AddDocument;