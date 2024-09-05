"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const RemoveButton = ({ id }) => {

    const router = useRouter()
    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                   const res = await fetch(`https://plandentall-server.vercel.app/documents/${id}`,{
                    method:'DELETE'
                   })
                   .then(res =>{
                    if(res.ok){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          router.refresh()
                    }
                   })
                  
                       
                } catch (error) {

                    console.log(error)

                }

            }
        });


    }
    return (
        <div>
            <button onClick={handleDelete}><MdOutlineDelete size={20} /></button>
        </div>
    );
};

export default RemoveButton;