import axios from "axios"

export const getDocument = async() =>{
    try {
           const res = await fetch('https://plandentall-server.vercel.app/documents',{
            cache:"no-cache"
           })
           return res.json()
       
    
    } catch (error) {
        console.log(error)
    }
}