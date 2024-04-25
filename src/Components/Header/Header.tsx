import './Header.css';
import data from './../../Assets/Languages.json';
import { VscSettings } from 'react-icons/vsc';
import { VscSearch } from 'react-icons/vsc';
import { IoHeart } from 'react-icons/io5';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IoSettingsSharp } from 'react-icons/io5';

export default function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <img src='./../../../public/Images/logo.png' alt='logo' />
          <div className='header-input'>
            <div className='header-input-container'>
              <button>
                <VscSettings size={18} color='var(--tertiary-text)' />
              </button>
              <input type='text' placeholder={`${data.En['Header-search']}`} />
            </div>
            <button>
              <VscSearch size={18} color='var(--tertiary-text)' />
            </button>
          </div>
        </div>
        <div className='header-right'>
          <button className='header-action temp'>
            <IoHeart size={18} />
          </button>
          <button className='header-action temp'>
            <IoNotificationsSharp size={18} />
          </button>
          <button className='header-action temp'>
            <IoSettingsSharp size={18} />
          </button>
          <button className='header-action'>
            <img src='./../../../public/Images/profile.png' alt='' />
          </button>
        </div>
      </div>
      <div className='mobile-header'>
        <div className='mobile-header-top'>
          <img width={108} src='./../../../public/Images/logo.png' alt='logo' />
          <button className='header-action'>
            <img src='./../../../public/Images/profile.png' alt='' />
          </button>
        </div>
        <div className='mobile-header-input-container'>
          <button className='mobiel-header-setting-button'>
            <VscSettings size={24} color='var(--tertiary-text)' />
          </button>
          <div className='mobile-header-input-wrapper'>
            <input type='text' placeholder={`${data.En['Header-search']}`} />
            <button>
              <VscSearch size={18} color='var(--tertiary-text)' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
