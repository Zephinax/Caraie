import './CategorySelector.css';
import { useState } from 'react';

export default function CategorySelector({
  title,
  number,
}: {
  title: string;
  number: number;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <div className='category-selector-input-container'>
      <input
        type='checkbox'
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
      <label className='selector-label'>{title}</label>
      <span>({number})</span>
    </div>
  );
}
