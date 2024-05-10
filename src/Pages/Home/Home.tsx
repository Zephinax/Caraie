import './Home.css';
import './Animations.css';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { HiArrowsUpDown } from 'react-icons/hi2';
import CarCard from '../../Components/CarCard/CarCard';
import data from './../../Assets/Data.json';

export default function Home() {
  return (
    <div className='app-container'>
      <div className='ads container'>
        <a className='ad-card'>
          <div className='ad-content'>
            <div className='ad-description'>
              <h1>{data.ad.ad1Content.title}</h1>
              <p>{data.ad.ad1Content.desc}</p>
            </div>
          </div>
          <div className='ad-image-container'>
            <img
              src='./../../../public/images/cars/Koenigsegg.png'
              alt='Koenigsegg'
            />
            <span className='ad-btn'>
              Rental Car
              <MdKeyboardArrowRight size={24} />
            </span>
          </div>
        </a>
        <a className='ad-card'>
          <div className='ad-content'>
            <div className='ad-description'>
              <h1>{data.ad.ad2Content.title}</h1>
              <p>{data.ad.ad2Content.desc}</p>
            </div>
          </div>
          <div className='ad-image-container'>
            <img
              src='./../../../public/images/cars/NissanGTR.png'
              alt='Koenigsegg'
            />
            <span className='ad-btn'>
              Rental Car
              <MdKeyboardArrowRight size={24} />
            </span>
          </div>
        </a>
      </div>
      <div className='filter container'>
        <div className='pick-up'>
          <div className='filter-title'>
            <div className='filter-circle active-circle'>
              <div></div>
            </div>
            <h1>Pick - Up</h1>
          </div>
          <div className='filter-options'>
            <a className='filter-option-selector'>
              <h2>Locations</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your city</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>
            <a className='filter-option-selector'>
              <h2>Date</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your city</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>{' '}
            <a className='filter-option-selector'>
              <h2>Time</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your time</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>
          </div>
        </div>
        <div className='filter-reverse'>
          <HiArrowsUpDown size={28} />
        </div>
        <div className='drop-off'>
          <div className='filter-title'>
            <div className='filter-circle'>
              <div></div>
            </div>
            <h1>Drop - Off</h1>
          </div>
          <div className='filter-options'>
            <a className='filter-option-selector'>
              <h2>Locations</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your city</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>
            <a className='filter-option-selector'>
              <h2>Date</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your date</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>{' '}
            <a className='filter-option-selector'>
              <h2>Time</h2>
              <div className='filter-option-wrapper'>
                <h3>Select your time</h3>
                <MdKeyboardArrowDown size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='popular'>
        <div className='section-title-container container'>
          <h2 className='section-title'>Popular Cars</h2>
          <a className='section-view-all' href=''>
            View All
          </a>
        </div>
        <div className='popular-container container'>
          {data.Popular.map((car) => {
            return (
              <CarCard
                key={car.id}
                name={car.name}
                category={car.category}
                fuelCapacity={car.fuelCapacity}
                gear={car.gear}
                personCapacity={car.personCapacity}
              />
            );
          })}
        </div>
        <div className='popular-slider container'></div>
      </div>
    </div>
  );
}
