import Sidebar from './components/sidebar'
import './styles/App.css'

function App() {


  return (
    <>
      <div className="app flex flex-row">
        <aside>
          <Sidebar></Sidebar>
        </aside>
        <main className='ml-36 h-screen flex flex-col items-center justify-center w-screen'>
          <p>testing testing testing</p>
        </main>
      </div>
    </>
  )
}

export default App
