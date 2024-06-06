import './Content.css';
import Rating from '../Rating/Rating';
import Like from '../Like/Like';
import { Link } from 'react-router-dom';
import { DecoderText } from '../DecoderText/DecoderText';
interface Data {
  data: {
    name: string;
    description: string;
    category: string;
    personCapacity: string;
    gear: string;
    fuelCapacity: string;
    discount: string;
    price: string;
    rating: string;
    id: string;
    isLiked: string;
  };
}
export default function Content(data: Data) {
  return (
    <div className='detail-card'>
      <div className='detail-top'>
        <div className='detail-top-left'>
          <h2 className='detail-name'>
            <DecoderText text={data.data.name} />
          </h2>
          <Rating rating={Number(data.data.rating)} />
        </div>
        <div className='detail-top-right'>
          <Like isLiked={data.data.isLiked} />
        </div>
      </div>
      <div className='detail-desc'>
        <p>{data.data.description}</p>
        <div className='detail-info'>
          <div className='👍🏻'>
            <div className='🙏🏻'>
              <span className='info-title'>Category</span>
              <span>{data.data.category}</span>
            </div>
            <div className='🙏🏻'>
              <span className='info-title'>Capacity</span>
              <span>{data.data.personCapacity} Person</span>
            </div>
          </div>
          <div className='👍🏻'>
            <div className='🙏🏻'>
              <span className='info-title'>Gearbox</span>
              <span>{data.data.gear}</span>
            </div>
            <div className='🙏🏻'>
              <span className='info-title'>FuelCap</span>
              <span>{data.data.fuelCapacity}L</span>
            </div>
          </div>
        </div>
      </div>
      <div className='car-price-and-rent'>
        <div className='car-price user-select-none'>
          {data.data.discount !== '' && (
            <span id='discount'>{data.data.discount}</span>
          )}
          <span id='price'>{data.data.price}</span>
        </div>
        <Link
          to={`/detail/${data.data.id}`}
          className='car-rent-btn user-select-none'>
          Rent Now
        </Link>
      </div>
    </div>
  );
}
