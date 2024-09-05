import RemoveButton from '@/components/ui/action/removeBtn/RemoveButton';
import { getDocument } from '@/components/utils/getDocument';
import Link from 'next/link';
import React from 'react';
import { FaEdit } from "react-icons/fa";


const Documents = async () => {

    const documents = await getDocument()
    console.log(documents, 'document data')
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='font-bold'>Documents list</h2>
                    <p className='text-xs'>Basic information will goes here</p>
                </div>
                <div>
                    <Link href="/addDocument"><button className='btn px-4 text-white bg-orange-400'> <span className='border p-1'>+</span>Add New</button></Link>
                </div>
            </div>

            <div className="overflow-x-auto mt-14">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>File Name</th>
                            <th>File Type</th>
                            <th>Assigned By</th>
                            <th>Status</th>
                            <th>Remaining Day</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            documents.map((document,index)=> <tr key={index}>
                            <th>{document?.fileName}</th>
                            <td>{document?.fileType}</td>
                            <td>{document?.assigned}</td>
                            <td>{document?.status}</td>
                            <td>{document?.remaining}</td>
                            <td><Link href={`/profile/documents/${document?._id}/edit/${document._id}`}><button><FaEdit /></button></Link></td>
                            <td><RemoveButton id={document._id} /></td>
                        </tr>)
                        }
                       
                     
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Documents;