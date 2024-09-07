import './Filter.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiArrowsUpDown } from 'react-icons/hi2';
import { useState } from 'react';
export default function Filter() {
  const [reverse, setReverse] = useState(false);
  return (
    <div className='filter container'>
      <div className='pick-up'>
        <div className='filter-title'>
          <div className={`filter-circle ${!reverse ? 'active-circle' : ''}`}>
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
      <div className='filter-reverse' onClick={() => setReverse(!reverse)}>
        <HiArrowsUpDown size={28} />
      </div>
      <div className='drop-off'>
        <div className='filter-title'>
          <div className={`filter-circle ${reverse ? 'active-circle' : ''}`}>
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
  );
}
