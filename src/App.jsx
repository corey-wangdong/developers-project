import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [data, setData] = useState('我是默认数据')

  const handleData = async () => {
    // const res = await axios.get('https://my-first-worker.15379675451.workers.dev/')
    const res = await axios({
      method: 'get',
      url: 'http://localhost:8787',
      // headers: {
      //   'content-type': 'application/json',
      //   'CF-Device-Type': 'mobile',
      // },
      params: {
        a: 1,
        b: 2,
      }
    })
    console.log(res)
    setData(JSON.stringify(res.data))
  }

  return (
    <>
      <button onClick={handleData}> 测试vercel</button>
      <button onClick={handleData}> 点击获取数据</button>
      <p>{data}</p>
    </>
  )
}

export default App
