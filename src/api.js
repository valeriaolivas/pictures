import axios from 'axios'

const searchImage =async(term)=>{
  const url = 'Yp13z9vVpG6YBP0WPLoQ9EIplnem6ot_YRnBdtmMOIo'
  const response = await axios.get(url,{
    params:{
      query:'cars'
    }
  })

  console.log(term)
  console.log(response.data.results)

  return response.data.results
}

export default searchImage