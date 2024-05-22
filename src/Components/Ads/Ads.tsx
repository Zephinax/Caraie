import './Ads.css';
import data from './../../Assets/Data.json';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Ads() {
  return (
    <div className='ads container'>
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
    </div>
  );
}
