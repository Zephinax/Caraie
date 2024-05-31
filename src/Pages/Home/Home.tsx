import './Home.css';
import './Animations.css';
import Ads from '../../Components/Ads/Ads';
import Filter from '../../Components/Filter/Filter';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';

export default function Home() {
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
