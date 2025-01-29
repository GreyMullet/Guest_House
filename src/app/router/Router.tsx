import Layout from '../Layout'
import { Main } from '@pages/main'
import { Gallery } from '@pages/gallery'
import { Reviews } from '@pages/reviews'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from '@pages/404'

function Router(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router