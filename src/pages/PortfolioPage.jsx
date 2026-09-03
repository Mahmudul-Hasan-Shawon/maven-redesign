
import FeaturedSpotlight from '../components/FeaturedSpotlight'
import Portfolio from '../components/Portfolio'
import CTA from '../components/CTA'

export default function PortfolioPage({ onNavigate }) {
  return (
    <>
      <FeaturedSpotlight onNavigate={onNavigate} />
      <Portfolio onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </>
  )
}
