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
    <div className='gallery-wrapper user-select-none'>
      <div className='main-img'>
        <img
          style={{ borderRadius: '10px' }}
          src={
            mainImage === 'default'
              ? new URL(
                  `/public/images/cars/${props.data.img}`,
                  import.meta.url
                ).href
              : new URL(`/public/images/noImg.webp`, import.meta.url).href
          }
          alt=''
        />
      </div>
      <div className='car-assets'>
        {carAssets.map((image) => {
          const src = `/Caraie/public/images/cars-assets/Carinside${image}.jpg`;
          return (
            <div className='image-container' key={image}>
              <img src={src} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
}
