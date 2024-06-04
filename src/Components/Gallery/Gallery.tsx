import { useState } from 'react';
import './Gallery.css';

interface Car {
  img: String;
}
interface GalleryProps {
  data: Car;
}
export default function Gallery(props: GalleryProps) {
  const [mainImage] = useState('default');
  const carAssets = [1, 2, 3];
  return (
    <div className='gallery-wrapper'>
      <div className='main-img'>
        <img
          style={{ borderRadius: '10px' }}
          src={
            mainImage === 'default'
              ? `/Caraie/public/images/cars/${props.data.img}`
              : ``
          }
          alt=''
        />
      </div>
      <div className='car-assets'>
        {carAssets.map((image) => {
          const src = `/Caraie/public/images/cars-assets/Carinside${image}.jpg`;
          return (
            <div key={image}>
              <img src={src} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
