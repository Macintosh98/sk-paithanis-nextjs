// pages/redirect

import {useEffect} from 'react'
export default function Admin() {
    useEffect(() => {
        window.location.assign('https://mahalaxmiskpaithani.vercel.app/login')
    })
    return(
        <>
        </>
    )
}