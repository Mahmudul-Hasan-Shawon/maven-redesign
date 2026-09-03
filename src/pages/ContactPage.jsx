import Contact from '../components/Contact'

export default function ContactPage({ onNavigate }) {
  return (
    <>
      <section className="pt-32 pb-0 px-6">
        <div className="max-w-6xl mx-auto text-center" />
      </section>
      <Contact onNavigate={onNavigate} />
    </>
  )
}
