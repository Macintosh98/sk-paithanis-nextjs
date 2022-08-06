// pages/redirect

import {useEffect} from 'react'
export default function Admin() {
    useEffect(() => {
        window.location.assign('http://localhost:5000/login')
    })
    return(
        <>
        </>
    )
}