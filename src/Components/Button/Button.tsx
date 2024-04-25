import { memo } from 'react';
import './Button.css';

interface ButtonProps {
  style: 'label' | 'icon-left' | 'icon-right' | 'icon';
  type: 'primary' | 'secondary' | 'minimal';
  label: string;
}

const Button = memo((props: ButtonProps) => {
  return (
    <>
      {props.style == 'label' && (
        <button
          className={`btn ${props.type == 'primary' ? 'primary-btn' : ''} ${
            props.type == 'secondary' ? 'secondary-btn' : ''
          } ${props.type == 'minimal' ? 'minimal-btn' : ''}`}
        >
          {props.style == 'label' ? props.label : ''}
        </button>
      )}
      {props.style == 'icon-left' && (
        <button
          className={`btn ${props.type == 'primary' ? 'primary-btn' : ''} ${
            props.type == 'secondary' ? 'secondary-btn' : ''
          } ${props.type == 'minimal' ? 'minimal-btn' : ''}`}
        ></button>
      )}
      {props.style == 'icon-right' && (
        <button
          className={`btn ${props.type == 'primary' && 'primary-btn'}`}
        ></button>
      )}
      {props.style == 'icon' && (
        <button
          className={`btn ${props.type == 'primary' && 'primary-btn'}`}
        ></button>
      )}
    </>
  );
});

export default Button;
