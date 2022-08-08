import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import AnnualReports from './pages/AnnualReports';
import BlogSingle from './pages/BlogSingle';
import Carers from './pages/Carers';
import Cart from './pages/Cart';
import CommuintyProjects from './pages/CommuintyProjects';
import Contact from './pages/Contact';
import DigitalPrints from './pages/DigitalPrints';
import Donation from './pages/Donation';
import Experiance from './pages/Experiance';
import Faq from './pages/Faq';
import Foster from './pages/Foster';
import Fundraising from './pages/Fundraising';
import FundraisingEvents from './pages/FundraisingEvents';
import Gallery from './pages/Gallery';
import HelpHerd from './pages/HelpHerd';
import HerdBlog from './pages/HerdBlog';
import HerdShop from './pages/HerdShop';
import LeaveLegacy from './pages/LeaveLegacy';
import Location from './pages/Location';
import MeetHerd from './pages/MeetHerd';
import MeetKumbura from './pages/MeetKumbura';
import MeetTeam from './pages/MeetTeam';
import Merchandise from './pages/Merchandise';
import OpsTeam from './pages/OpsTeam';
import Orphans from './pages/Orphans';
import OurStory from './pages/OurStory';
import Partners from './pages/Partners';
import Press from './pages/Press';
import ProductSingle from './pages/ProductSingle';
import Projects from './pages/Projects';
import WishList from './pages/WishList';
import Product from './components/Product';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/annualReports" element={<AnnualReports />} />
      <Route path="/blogSingle" element={<BlogSingle />} />
      <Route path="/Carers" element={<Carers />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/CommuintyProjects" element={<CommuintyProjects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/DigitalPrints" element={<DigitalPrints />} />
      <Route path="/Donation" element={<Donation />} />
      <Route path="/Experiance" element={<Experiance />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/Foster" element={<Foster />} />
      <Route path="/Fundraising" element={<Fundraising />} />
      <Route path="/FundraisingEvents" element={<FundraisingEvents />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/HelpHerd" element={<HelpHerd />} />
      <Route path="/HerdBlog" element={<HerdBlog />} />
      <Route path="/HerdShop" element={<HerdShop />} />
      <Route path="/LeaveLegacy" element={<LeaveLegacy />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/MeetHerd" element={<MeetHerd />} />
      <Route path="/MeetKumbura" element={<MeetKumbura />} />
      <Route path="/MeetTeam" element={<MeetTeam />} />
      <Route path="/Merchandise" element={<Merchandise />} />
      <Route path="/OpsTeam" element={<OpsTeam />} />
      <Route path="/Orphans" element={<Orphans />} />
      <Route path="/OurStory" element={<OurStory />} />
      <Route path="/Partners" element={<Partners />} />
      <Route path="/Press" element={<Press />} />
      <Route path="/ProductSingle" element={<ProductSingle />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/WishList" element={<WishList />} />
    </Routes>
  )
}

export default Routing
