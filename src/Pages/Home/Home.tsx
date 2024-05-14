import './Home.css';
import './Animations.css';
import Ads from '../../Components/Ads/Ads';
import Filter from '../../Components/Filter/Filter';
import Popular from '../../Components/Popular/Popular';
import Recommendation from '../../Components/Recommendation/Recommendation';

export default function Home() {
  return (
    <div className='app-container'>
      <Ads />
      <Filter />
      <Popular />
      <Recommendation />
    </div>
  );
}
