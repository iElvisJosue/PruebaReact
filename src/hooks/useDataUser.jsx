import { useState, useEffect } from "react";


export default function useDataUser(){
    const [dataUser, setDataUser] = useState(null)

    useEffect(()=> {
        async function getDataUser() {
            const res = await fetch("../../user.json");
            const newRes = await res.json();
            setDataUser(newRes)
        }
        getDataUser();
    }, [])

    return{
        dataUser
    }
}