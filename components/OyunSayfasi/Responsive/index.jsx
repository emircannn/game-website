import Hero from "@/components/Home/Hero"
import Info from "./components/Info"
import AboutGame from "../AboutGame"
import Visual from "./components/Visual"
import Description from "../Description"
import Configurations from "../Configurations"
import SetReview from "../Reviews/SetReview"
import RecentReviews from "../Reviews/components/RecentReviews"
import Button from "@/components/UI & Layout/Form/Button"
import GameWrapper from "@/components/UI & Layout/GameWrapper"

const Responsive = ({setShowMore, showMore, data}) => {
  return (
    <div className="768:hidden ">
        <Hero src={data?.bannerImage} height='h-[300px]'/>
        <main className="mt-[230px] px-[15px] flex flex-col gap-[30px]">
            <Info
                data={data}
            />

            <AboutGame
            textSize='[13px]'
            setShowMore={setShowMore}
            data={data}
            routeAbout='#resAbout'
            routeReview='#resReview'
            />

            <Visual
                data={data}
            />

            <Description 
            setShowMore={setShowMore} 
            showMore={showMore}
            data={data}
            routeAbout='resAbout'
            />

            <Configurations 
            isResponsive={true}
            data={data}
            textSize='[13px]'/>

            <div id='resReview'>
            <h4 className='heading my-[30px]' >Değerlendirmeler</h4>
            <SetReview 
            data={data}
            width='80'
            height='80'
            />

            <div className='grid grid-rows-3 grid-cols-1 gap-[10px] w-full'>
                <RecentReviews/>
                <RecentReviews/>
                <RecentReviews/>
            </div>

            <div className='align-cntr mt-[10px]'>
            <Button
            title='Tamamını Gör'
            textSize='13px'
            />
        </div>
            </div>

            <GameWrapper
                title='Benzer Oyunlar'
                showAll={false}
                continueBtn={true}
                isResponsive={true}
                data={data.similarGames}
            />
        </main>
    </div>
  )
}

export default Responsive