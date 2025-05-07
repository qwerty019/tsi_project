import React from 'react';

interface InputProps {
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'third' | 'fourth';
  title: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ size, color, title, onChange }) => {
  const defaultClass = 'border-1 border-b-black rounded-md shadow px-3 py-2';
  
  const classes = {
    colors: {
      primary: "bg-sky-100",
      secondary: "bg-cyan-50",
      third: "bg-green-50",
      fourth: "bg-lime-50",
    },
    sizes: {
      small: "text-sm h-8",
      medium: "text-base h-10",
      large: "text-lg h-12",
    },
  };

  return (
    <input 
      className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]}`}
      onChange={onChange}
      placeholder={title}
    />
  );
};

export default Input;