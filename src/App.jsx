import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Hero from './components/Hero'
import './styles/App.css'

function App() {


  return (
    <>
      <div className="app flex flex-col md:flex-row">
        <aside>
          <Sidebar></Sidebar>
        </aside>
        <Navbar></Navbar>
        <main className='ml-0 md:ml-36 h-screen flex flex-col items-center justify-center w-screen bg-[#1d1e1d]'>
          <Hero></Hero>
        </main>
      </div>
    </>
  )
}

export default App
