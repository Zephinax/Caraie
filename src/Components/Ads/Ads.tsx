import './Ads.css';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useFetch } from '../../Hooks/useFetch';

export interface Ad {
  title: string;
  desc: string;
  img: string;
  id: string;
}

export default function Ads() {
  const { data } = useFetch<Ad[]>('http://localhost:8000/ads');

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
                  <img
                    src={`./../../../public/images/${ad.img}`}
                    alt={ad.title}
                  />
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
