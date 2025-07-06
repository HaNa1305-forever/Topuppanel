
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [duration, setDuration] = useState('1 Bulan');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [proof, setProof] = useState(null);

  const paketList = [
    { ram: '1 GB', price: 'Rp1.000' },
    { ram: '2 GB', price: 'Rp2.000' },
    { ram: '3 GB', price: 'Rp3.000' },
    { ram: '4 GB', price: 'Rp4.000' },
    { ram: '8 GB', price: 'Rp5.000' },
    { ram: 'Unlimited', price: 'Rp8.000' },
  ];

  const handleSubmit = () => {
    if (!selected || !username || !email || !proof) return alert('Lengkapi semua data');
    alert(`Pesanan berhasil dikirim:\n${selected.ram} - ${duration}\nUser: ${username}`);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <Head>
        <title>ClarivenStore Panel</title>
      </Head>

      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">ClarivenStore - Topup Panel Pterodactyl</h1>

      <div className="text-center mb-6">
        <Link href="/admin" className="text-xs text-gray-600 hover:text-green-400">Login Admin (rahasia)</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {paketList.map((paket, i) => (
          <div
            key={i}
            className={\`p-4 rounded-xl border cursor-pointer hover:bg-red-700 \${selected?.ram === paket.ram ? 'bg-red-600 border-white' : 'bg-gray-800 border-gray-600'}\`}
            onClick={() => setSelected(paket)}
          >
            <h2 className="text-xl font-bold">{paket.ram}</h2>
            <p>{paket.price} / {duration}</p>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block mb-1">Durasi:</label>
          <select className="w-full bg-gray-900 p-2 rounded" value={duration} onChange={e => setDuration(e.target.value)}>
            <option>1 Bulan</option>
            <option>Permanen</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Username Panel:</label>
          <input
            type="text"
            className="w-full bg-gray-900 p-2 rounded"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            className="w-full bg-gray-900 p-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Bukti Transfer:</label>
          <input
            type="file"
            className="w-full bg-gray-900 p-2 rounded"
            onChange={e => setProof(e.target.files[0])}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-bold"
        >
          Kirim Order 🚀
        </button>
      </div>
    </div>
  );
    }
    
