import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [from, setFrom] = useState('')
  const [data, setData] = useState('我是默认数据')

  const handleData = async () => {
    const res = await axios.get('https://my-first-worker.15379675451.workers.dev/')
    console.log(res)
    setData(JSON.stringify(res.data))
  }

  const handlevercel = async () => {
    const res = await axios.get(`https://developers-project.vercel.app/api/test?name=${from || '未知来源'}`)
    console.log(res)
    setData(res.data.message || '')
  }

  const handleBlur = (data) => {
    setFrom(data)
  }

  return (
    <>
      <input type="text" placeholder='请输入来源' onBlur={handleBlur} />
      <button onClick={handlevercel}> 测试vercel</button>
      <button onClick={handleData}> 点击获取数据</button>
      <p>{data}</p>
    </>
  )
}

export default App
