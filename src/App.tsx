import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={
          <div className="text-center">
            <h1 className="text-2xl">Welcome</h1>
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register here
            </a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
