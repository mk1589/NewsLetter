
import Header from "@/shared/widgets/header/header"
import Banner from "./features/banner";
import Branding from "@/modules/home/features/branding";
import Benefits from "@/modules/home/features/benefits"
import FeatureHighlight from "@/modules/home/features/feature.highlight"
import Pricing from "@/modules/home/features/pricing"



const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <FeatureHighlight />
            <Pricing />
        </div>
    )
}


export default Home