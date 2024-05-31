import './Home.css';
import './Animations.css';
import Ads from '../../Components/Ads/Ads';
import Filter from '../../Components/Filter/Filter';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='app-container'>
      <Ads />
      <Filter />
      <CarWrapper
        slide={true}
        title='Sport Cars'
        linkTitle='View All'
        link='/Category'
        url='http://localhost:8000/Cars?category=Sport'
      />
      <CarWrapper
        title='All Cars'
        linkTitle='View All'
        link='/Category'
        url='http://localhost:8000/Cars?_sort=category'
      />
    </div>
  );
}
