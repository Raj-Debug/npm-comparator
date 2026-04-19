import { useState } from 'react'

function Compare({ onSearch }) {
  const [pack1, setPack1] = useState('')
  const [pack2, setPack2] = useState('')

  return (
    <div className="m-2">
      <h1 className="text-xl mb-2">Enter the two packages</h1>
      <div className="flex flex-col sm:flex-row gap-2">
        <input className="border-2 border-gray-300 rounded-lg p-2 flex-1 text-sm" placeholder="package-one" value={pack1} onChange={(e) => setPack1(e.target.value)} />
        <input className="border-2 border-gray-300 rounded-lg p-2 flex-1 text-sm" placeholder="package-two" value={pack2} onChange={(e) => setPack2(e.target.value)} />
        <button onClick={() => onSearch(pack1, pack2)} className="bg-blue-500 rounded-lg px-4 py-2 text-white text-sm font-semibold">Compare</button>
      </div>
    </div>
  )
}

export default Compare