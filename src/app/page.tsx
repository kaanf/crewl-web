import Calculator from '@/pages/calculator'
import Community from '@/pages/community'
import Customers from '@/pages/customers'
import Features from '@/pages/features'
import Footer from '@/pages/footer'
import Hero from '@/pages/hero'
import Insight from '@/pages/insight'
import Integrations from '@/pages/integrations'
import Navbar from '@/pages/navbar'
import Services from '@/pages/services'
import SignUp from '@/pages/signup'
import Video from '@/pages/video'

export default function Home() {
  return (
    <div className="p-2 text-[#222]" >
      <Hero />
    </div>
  )
}



// navbar
// hero
// video (but not rly)
// features (reusable components)
// insight (CAD) (reusable components)
// services; ip lookup, gnql, trends (don't reuse bc opposite sides?)
// integrations
// customers
// roi calculator
// community
// sign up
// footer