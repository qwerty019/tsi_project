import React from "react";

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary';
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ size, color, title }) => {
  const defaultClass = "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: {
        button: "bg-green-700 hover:bg-green-800",
        text: "text-white",
      },
      secondary: {
        button: "bg-red-500 hover:bg-red-600",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] text-sm",
      medium: "rounded-[14px] text-base",
      large: "rounded-[16px] text-base min-h-[56px]",
    },
  };

  return (
    <div
      className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color].button}`}
    >
      <div className={classes.colors[color].text}>{title}</div>
    </div>
  );
};