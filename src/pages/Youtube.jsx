import axios from 'axios';
import React, { useEffect } from 'react'

const Youtube =  () => {

    const options = {
        method: 'GET',
  url: 'https://google-search74.p.rapidapi.com/',
  params: {
    query: 'Mobile',
    limit: '1000',
    related_keywords: 'true'
  },
  headers: {
    'X-RapidAPI-Key': '273384df23mshdba3bc26da6d116p1ba6dajsn598ada95a608',
    'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
  }
    };

    const getYoutube = async () =>{
        try {
            const response = await axios.request(options);
            
            console.log(response.data);
            document.write(response.data.results)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getYoutube()
    },[])
    return (
        <div>yt</div>
    )
}

export default Youtube