import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

import Footerr from './pages/Footer';
import Genuine from "./pages/Genuine"
import B2B from './pages/B2B';
import B2C from './pages/B2C';
import API from './pages/API';
import Error404 from "./pages/Error404"
import Escrow from "./pages/Escrow"
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import UseCases from './pages/UseCases';
import Blog from './pages/Blog';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Buyer from './pages/Buyer';
// import PayPalBlog from './pages/PayPalBlog';






export default function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<Error404/>}/>

      <Route path="/buyer" element={<Buyer/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route path="/product/b2b" element={<B2B/>} /> */}
      <Route path="/product/API" element={<API/>} />
      {/* <Route path="/product/b2c" element={<B2C/>} /> */}
      <Route path="/footer" element={<Footerr/>} />
      <Route path="/genuine" element={<Genuine/>} />
      <Route path="/product/escrow"  element={<Escrow/>} />
      <Route path="/legal/privacypolicy"  element={<PrivacyPolicy/>} />
      <Route path='/usecases' element={<UseCases/>}/>
      <Route path='/termsandcondition' element={<TermsAndCondition/>}/>
      {/* <Route path='/blog' element={<Blog/>}/> */}
      <Route path="/case-study" element={<CaseStudiesPage/>} />
      <Route path="/case-study/:caseStudyName" element={<CaseStudyDetail />} />

      
    </Routes>
    
    </BrowserRouter>
  )

   
}

