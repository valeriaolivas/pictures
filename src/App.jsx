import { useState } from 'react'

import reactLogo from './components/imageList'
import './App.css'

function App() {
  const [images , setImages] = useState([])

  const.log('uste esta buscando con:', term)
  const result = await searchImage(term)

  console.log('coco')
  console.log(result)

  setImagea(result)
}

  return (
    <div>
      <h1>App</h1>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )


export default App

