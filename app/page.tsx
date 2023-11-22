import Image from 'next/image';
import Chessboard from './components/chessboard';

export default function Home() {
  return (
    <main className=" bg-gradient-to-r from-gray-900 to-slate-700">
      <h1 className='pt-10 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-gray-600'>The bishop</h1>
      <section className="flex items-center justify-center h-screen">
        <Chessboard />
      </section>
    </main>
  );
}
