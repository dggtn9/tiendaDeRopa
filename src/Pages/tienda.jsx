import React from "react"
import NewCollections from "../Components/NewCollection/NewCollection"
import Footer from '../Components/Footer/Footer'
import Popular from "../Components/Popular/Popular"
import Offers  from "../Components/Offers/Offers"
import Hero from "../Components/Hero/Hero"
import Newsletter from "../Components/Newsletter/Newsletter"

const Tienda = () => {
    return (
        <div>
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <Newsletter/>
        </div>
        <div>
        <Footer/>
        </div>
        </div>
    )
}
export default Tienda