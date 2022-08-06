// pages/redirect

// import {useEffect} from 'react'
// export default function Admin() {
//     useEffect(() => {
//         window.location.assign('http://localhost:5000/login')
//     })
//     return(
//         <>
//         </>
//     )
// }

import { Layout } from '@components/common'
import { Text } from '@components/ui'

export async function getServerSideProps() {
  return {
    redirect: {
        permanent: false,
        destination: "http://localhost:5000"
      }
  }
}

export default function Admin() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading">Not Found</Text>
      <Text className="">
        The requested page doesn't exist or you don't have access to it.
      </Text>
    </div>
  )
}

Admin.Layout = Layout
