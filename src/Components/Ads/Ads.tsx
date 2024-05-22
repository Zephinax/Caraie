import './Ads.css';
import data from './../../Assets/Data.json';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useState, useEffect } from 'react';

export default function Ads({ setLoad }) {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [ads, setAds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/Popular');
        const json = await response.json();
        setAds(json);
        setLoadingStatus(false);
        setLoad('Ads');
      } catch (error) {
        console.error('Error fetching data [Ads] :', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='ads container'>
      {!loadingStatus && (
        <>
          <Link to='/Category' className='ad-card user-select-none'>
            <div className='ad-content'>
              <div className='ad-description'>
                <h1>{data.ad.ad1Content.title}</h1>
                <p>{data.ad.ad1Content.desc}</p>
              </div>
            </div>
            <div className='ad-image-container'>
              <div>
                <img src='./../../../public/images/Ad1.png' alt='Koenigsegg' />
              </div>
              <span className='ad-btn'>
                Rental Car
                <MdKeyboardArrowRight size={24} />
              </span>
            </div>
          </Link>
          <Link to='/Category' className='ad-card user-select-none'>
            <div className='ad-content'>
              <div className='ad-description'>
                <h1>{data.ad.ad2Content.title}</h1>
                <p>{data.ad.ad2Content.desc}</p>
              </div>
            </div>
            <div className='ad-image-container'>
              <div>
                <img src='./../../../public/images/Ad2.png' alt='Koenigsegg' />
              </div>
              <span className='ad-btn'>
                Rental Car
                <MdKeyboardArrowRight size={24} />
              </span>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
