import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Details from './pages/details/Details'

function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/:category' element={<Catalog/>}/>
            <Route path='/:category/search/:keyword' element={<Catalog/>}/>
            <Route path='/:category/:id' element={<Details/>}/>
        </Route>
      </Routes>
		</BrowserRouter>
	)
}

export default App
