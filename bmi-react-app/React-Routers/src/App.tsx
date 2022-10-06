import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { AppRoutes } from './components/AppRoutes'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
            <AppRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
