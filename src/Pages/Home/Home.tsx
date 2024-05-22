import './Home.css';
import './Animations.css';
import Ads from '../../Components/Ads/Ads';
import Filter from '../../Components/Filter/Filter';
import Popular from '../../Components/Popular/Popular';
import Recommendation from '../../Components/Recommendation/Recommendation';
import { useEffect, useState } from 'react';
import LoadingSpiner from '../../Components/LoadingSpiner/LoadingSpiner';

export default function Home() {
  const [adsLoad, setAdsLoad] = useState(false);
  const [popLoad, setPopLoad] = useState(false);
  const [recLoad, setRecLoad] = useState(false);
  const [allLoad, setAllLoad] = useState(false);

  useEffect(() => {
    const arr = [adsLoad, popLoad, recLoad];
    arr.every(Boolean) && setAllLoad(true);
  }, [adsLoad, popLoad, recLoad]);

  const statusToggle = (comp: string) => {
    if (comp === 'Ads') {
      setAdsLoad(true);
    } else if (comp === 'Popular') {
      setPopLoad(true);
    } else if (comp === 'Recommendation') {
      setRecLoad(true);
    }
  };

  return (
    <div className='app-container'>
      <Ads setLoad={statusToggle} />
      <Filter />
      <Popular setLoad={statusToggle} />
      <Recommendation setLoad={statusToggle} />
      {!allLoad && <LoadingSpiner />}
    </div>
  );
}
