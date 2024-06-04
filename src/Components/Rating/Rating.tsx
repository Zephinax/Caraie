import './Rating.css';
export default function Rating() {
  return (
    <div className='rating'>
      <input
        type='radio'
        // checked={ratingNum >= 1 && true}
        id='star-1'
        name='star-radio'
        value='star-1'></input>
      <label htmlFor='star-1'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            pathLength='360'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'></path>
        </svg>
      </label>
      <input
        type='radio'
        // checked={ratingNum >= 2 && true}
        id='star-2'
        name='star-radio'
        value='star-1'></input>
      <label htmlFor='star-2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            pathLength='360'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'></path>
        </svg>
      </label>
      <input
        type='radio'
        // checked={ratingNum >= 3 && true}
        id='star-3'
        name='star-radio'
        value='star-1'></input>
      <label htmlFor='star-3'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            pathLength='360'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'></path>
        </svg>
      </label>
      <input
        type='radio'
        // checked={ratingNum >= 4 && true}
        id='star-4'
        name='star-radio'
        value='star-1'></input>
      <label htmlFor='star-4'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            pathLength='360'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'></path>
        </svg>
      </label>
      <input
        type='radio'
        // checked={ratingNum >= 5 && true}
        id='star-5'
        name='star-radio'
        value='star-1'></input>
      <label htmlFor='star-5'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            pathLength='360'
            d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z'></path>
        </svg>
      </label>
    </div>
  );
}
