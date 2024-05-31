import './Category.css';
import { useEffect } from 'react';
export default function Category() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Category</div>;
}
