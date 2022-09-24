import './assets/css/App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Core } from './components/Core'

function App() {
  return (
    <div id="container">
      <Header />
      <main>
       <Core />
      </main>
      <Footer/>
    </div>
  )
}

export default App
