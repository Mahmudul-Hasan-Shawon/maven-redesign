import Hero from '../components/Hero'
import LogoMarquee from '../components/LogoMarquee'
import Stats from '../components/Stats'
import VisionMission from '../components/VisionMission'
import ServicesBento from '../components/ServicesBento'
import Portfolio from '../components/Portfolio'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import CTA from '../components/CTA'
import IntegrationNetwork from '../components/IntegrationNetwork'

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <LogoMarquee />
      <Stats />
      <VisionMission onNavigate={onNavigate} />
      <ServicesBento onNavigate={onNavigate} />
      <Portfolio onNavigate={onNavigate} home />
      <WhyChoose />
      <Testimonials />
      <IntegrationNetwork />
      <Team onNavigate={onNavigate} showCallout={false} title="The Experts Behind Your Success" />
      <CTA onNavigate={onNavigate} />
    </>
  )
}
