import LandingPage from '../layouts/landing-page'
import HomeBanner from './../components/home-banner/home-banner'
import Presentation from './../components/presentation/presentation'
import OthersQuestion from './../components/others-questions/others-questions'

export default function Index() {

  return (
    <LandingPage>
      <HomeBanner/>
      <Presentation />
      <OthersQuestion />
    </LandingPage>
  )
}