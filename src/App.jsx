import { useState } from 'react'
import Compare from './Compare.jsx'

function App() {
  const [result1, setresult1] = useState(null)
  const [result2, setresult2] = useState(null)
  const [down1, setdown1] = useState(null)
  const [down2, setdown2] = useState(null)
  const [alldw1, setalldw1] = useState(null)
  const [alldw2, setalldw2] = useState(null)

  async function search(pack1, pack2) {
    const res1 = await fetch(`https://registry.npmjs.org/${pack1}`)
    const week1 = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pack1}`)
    const alld1 = await fetch(`https://api.npmjs.org/downloads/point/2010-01-01:2026-04-19/${pack1}`)
    const res2 = await fetch(`https://registry.npmjs.org/${pack2}`)
    const week2 = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pack2}`)
    const alld2 = await fetch(`https://api.npmjs.org/downloads/point/2010-01-01:2026-04-19/${pack2}`)

    setresult1(await res1.json())
    setresult2(await res2.json())
    setdown1(await week1.json())
    setdown2(await week2.json())
    setalldw1(await alld1.json())
    setalldw2(await alld2.json())
  }

    return (
    <div className="min-h-screen " style={{ fontFamily: "'Inter', sans-serif" }}>

      <div className=" mx-auto pt-16 px-6  ">
        <div className="bg-white-50 rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">npm compare</h1>
          <Compare onSearch={search} />
        </div>

   {result1 && (
  <div className="bg-white-50 mt-6 rounded-2xl border border-gray-200 p-3 shadow-sm text-xs md:text-sm">

    <div className="grid grid-cols-3 gap-1 mb-2">
      <div />
      <p className="font-semibold text-blue-500 text-center">{result1.name}</p>
      <p className="font-semibold text-purple-500 text-center">{result2?.name}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">Description</p>
      <p className="text-gray-700">{result1.description}</p>
      <p className="text-gray-700">{result2?.description}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">Version</p>
      <p className="text-gray-700">{result1['dist-tags'].latest}</p>
      <p className="text-gray-700">{result2?.['dist-tags']?.latest}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">License</p>
      <p className="text-gray-700">{result1.license}</p>
      <p className="text-gray-700">{result2?.license}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">Modified</p>
      <p className="text-gray-700">{new Date(result1.time.modified).toLocaleDateString()}</p>
      <p className="text-gray-700">{result2 ? new Date(result2.time.modified).toLocaleDateString() : ''}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">Weekly DL</p>
      <p className="text-gray-700">{down1?.downloads?.toLocaleString()}</p>
      <p className="text-gray-700">{down2?.downloads?.toLocaleString()}</p>
    </div>

    <div className="grid grid-cols-3 gap-1  py-2">
      <p className="text-gray-400">All-time DL</p>
      <p className="text-gray-700">{alldw1?.downloads?.toLocaleString()}</p>
      <p className="text-gray-700">{alldw2?.downloads?.toLocaleString()}</p>
    </div>

  </div>
)}
      </div>
    </div>
  )
}

export default App