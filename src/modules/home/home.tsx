
import Header from "@/shared/widgets/header/header"
import Banner from "./elements/banner";
import Branding from "@/modules/home/elements/branding";
import Benefits from "@/modules/home/elements/benefits"
import FeatureHighlight from "@/modules/home/elements/feature.highlight"
import Pricing from "@/modules/home/elements/pricing"
import Footer from "@/modules/home/elements/footer";



const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHighlight />
            <Pricing />
            <Footer />
        </div>
    )
}


export default Home