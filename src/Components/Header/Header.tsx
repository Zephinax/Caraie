import "./Header.css";
import content from "./../../Assets/Languages.json";
import { IoHeart } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
import ToolTip from "../ToolTip/ToolTip";
export default function Header() {
  return (
    <>
      <div className='header container'>
        <div className='header-left'>
          <img
            className='header-logo'
            src='./../../../public/images/logo.png'
            alt='Caraie logo'
          />
          <div className='header-search'>
            <button className='header-search-btn tool-tip'>
              <VscSettings />
              <ToolTip style={{ top: 30, left: -30 }} text='Search Setting' />
            </button>
            <input
              className='header-search-input'
              type='text'
              placeholder={content.En["header-search"]}
            />
            <button className='header-search-btn tool-tip'>
              <BiSearchAlt />
              <ToolTip
                style={{
                  top: 30,
                  left: -8,
                  transform: "scaleX(-1)",
                }}
                text='Search'
              />
            </button>
          </div>
        </div>
        <div className='header-right'>
          <button className='header-action tool-tip'>
            <IoHeart />
            <span className='tool-tip-text tool-tip-top'>Favorite Cars</span>
          </button>
          <button className='header-action tool-tip'>
            <IoNotificationsSharp />
            <span className='tool-tip-text tool-tip-top'>Alerts</span>
          </button>
          <button className='header-action tool-tip'>
            <IoSettingsSharp />
            <span className='tool-tip-text tool-tip-top'>Setting</span>
          </button>
          <button className='header-action tool-tip'>
            <img src='./../../../public/images/profile.png' alt='' />
            <span className='tool-tip-text tool-tip-top'>Account</span>
          </button>
        </div>
      </div>
      <div className='mobile-header-search'>
        <button className='header-search-btn tool-tip'>
          <VscSettings />
          <ToolTip style={{ top: 30, left: -30 }} text='Search Setting' />
        </button>
        <input
          className='header-search-input'
          type='text'
          placeholder={content.En["header-search"]}
        />
        <button className='header-search-btn tool-tip'>
          <BiSearchAlt />
          <ToolTip
            style={{
              top: 30,
              left: -8,
              transform: "scaleX(-1)",
            }}
            text='Search'
          />
        </button>
      </div>
    </>
  );
}
