

import './App.css'
import { Footer } from './components/Footer';

import { Header } from './components/header';
import { Home } from './pages/home';



function App() {
  

  return (
    <div className='bg-[#13161d] h-screen w-screen'>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
