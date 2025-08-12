
// Importando componentes de 'components'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About' 

// Importando componentes de 'pages/sections'
import BannerNotbook from './pages/sections/Banner/Banner'
import Services from '../src/pages/sections/Servicees/Services' 
import Video from '../src/pages/sections/Video/index'           
import Work from './pages/sections/Work/Work' 

export default function App(){
  return (
    <>
      <Header />

      {/*--- BANNER --- */}
      <BannerNotbook />

      {/*--- ABOUT ---*/}
      <About />

      {/*--- SERVICES ---*/}
      <Services />

      {/*--- VIDEO ---*/}
      <Video />

      {/*--- WORK ---*/ }
      <Work />

      {/*--- FOOTER ---*/}
      <Footer />
    </>
  )
} 

