import './Ads.css';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useFetchJson } from '../../Hooks/useFetchJson';

export interface Ad {
  title: string;
  desc: string;
  img: string;
  id: string;
}

export default function Ads() {
  const { data } = useFetchJson<Ad[]>('/Caraie/db/ads.json');

  return (
    <div className='ads container'>
      {data &&
        data.map((ad: Ad) => {
          return (
            <Link
              key={ad.id}
              to='/Category'
              className='ad-card user-select-none'>
              <div className='ad-content'>
                <div className='ad-description'>
                  <h1>{ad.title}</h1>
                  <p>{ad.desc}</p>
                </div>
              </div>
              <div className='ad-image-container'>
                <div>
                  <img src={`/Caraie/public/images/${ad.img}`} alt={ad.title} />
                </div>
                <span className='ad-btn'>
                  Rental Car
                  <MdKeyboardArrowRight size={24} />
                </span>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
