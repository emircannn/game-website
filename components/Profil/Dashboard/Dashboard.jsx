import Cup from './Cup';
import LastFavorited from './LastFavorited';
import LastGame from './LastGame';
import Overview from './Overview';

const Dashboard = () => {
  return (
    <div className="mt-[30px] grid grid-cols-4 gap-[10px] 768:gap-[30px]">
        <Overview/>
        <Cup/>

        <LastFavorited/>
        <LastGame/>
    </div>
  )
}

export default Dashboard