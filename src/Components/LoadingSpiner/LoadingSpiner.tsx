import './LoadingSpiner.css';

export default function LoadingSpiner() {
  return (
    <div className='loader-container'>
      {/* <div className='loader'>
        <div className='square' id='sq1'></div>
        <div className='square' id='sq2'></div>
        <div className='square' id='sq3'></div>
        <div className='square' id='sq4'></div>
        <div className='square' id='sq5'></div>
        <div className='square' id='sq6'></div>
        <div className='square' id='sq7'></div>
        <div className='square' id='sq8'></div>
        <div className='square' id='sq9'></div>
      </div> */}
      <div className='loader'>
        Loading
        <span></span>
      </div>
    </div>
  );
}
