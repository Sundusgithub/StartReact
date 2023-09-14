import React from 'react'
import  NavigationBar  from './Components/NavigationBar'
import ProductSection from './Components/ProductSection'
import ContactSection from './Components/ContactSection'
function App() {
  return (
<>
<NavigationBar companyName='SunSilk' ownerName="Sundus Siddiqui"/>
<ProductSection sectionTitle ="Stitched"/>
<ProductSection sectionTitle ="Unstitced"/>
<ContactSection/>

</>
  )
}

export default App