import React, { useEffect, useState } from 'react'

function github() {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/suryansh0010')
        .then(response=> response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    })
  return (
    <div className='bg-gray-600 text-center m-4 p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default github
