import {DefaultSection, ShelfSection, ProfitSection, AdjectiveSection} from '../components/sections'

export default function Home() {
  return (
    <div className="container">
      <DefaultSection/> 
      <ShelfSection />
      <ProfitSection/>
      <AdjectiveSection/>
      <style jsx>{`
       
      `}</style>

      <style jsx global>{`
       
      `}</style>
    </div>
  )
}
