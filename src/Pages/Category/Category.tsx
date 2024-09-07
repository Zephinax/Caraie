import './Category.css';
import { useEffect } from 'react';
import CategorySelector from '../../Components/CategorySelector/CategorySelector';
import Filter from '../../Components/Filter/Filter';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';

export default function Category() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='category-container'>
      <div className='category-selector'>
        <div className='category-section'>
          <h3 className='category-title'>TYPE</h3>
          <CategorySelector title='Sport' number={6} />
          <CategorySelector title='Hypercar' number={2} />
          <CategorySelector title='Luxury' number={3} />
          <CategorySelector title='SUV' number={3} />
          <CategorySelector title='Hatchback' number={1} />
        </div>
        <div className='category-section'>
          <h3 className='category-title'>CAPACITY</h3>
          <CategorySelector title='2 Person' number={6} />
          <CategorySelector title='4 Person' number={7} />
          <CategorySelector title='5 Person' number={1} />
          <CategorySelector title='6 Person' number={1} />
        </div>
        <div className='category-section'>
          <div className='card-conteiner'>
            <div className='card-content'>
              <div className='card-title'>
                <span>Price Range</span>
              </div>
              <div className='values'>
                <div>
                  $<span id='first'>60</span>
                </div>{' '}
                -
                <div>
                  $<span id='second'>150</span>
                </div>
              </div>
              <small className='current-range'>
                Current Range:
                <div>
                  $<span id='third'>120</span>
                </div>
              </small>
              <div
                data-range='#third'
                data-value-1='#second'
                data-value-0='#first'
                className='slider'>
                <label className='label-min-value'>60</label>
                <label className='label-max-value'>150</label>
              </div>
              <div className='rangeslider'>
                <input
                  className='min input-ranges'
                  name='range_1'
                  type='range'
                  min='1'
                  max='10000'
                  value='735'
                />
                <input
                  className='max input-ranges'
                  name='range_1'
                  type='range'
                  min='1'
                  max='10000'
                  value='6465'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='category-cars'>
        <Filter />
        <CarWrapper title='All Cars' linkTitle='View All' link='/Category' />
      </div>
    </div>
  );
}
