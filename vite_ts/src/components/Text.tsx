import React from 'react';

interface TextProps {
  size: 'small' | 'medium' | 'large';
  color: 'primary';
  title: string;
}

export const Text: React.FC<TextProps> = ({ size, color, title }) => {
  const classes = {
    colors: {
      primary: {
        back: "bg-amber-300",
        text: "text-black",
      },
    },
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  };

  return (
    <div className={`${classes.sizes[size]} ${classes.colors[color].back}`}>
      {title}
    </div>
  );
};

export default Text;