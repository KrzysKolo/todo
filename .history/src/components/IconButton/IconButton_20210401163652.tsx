import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as IconButtonStyles } from './IconButton.module.scss';

interface IconButtonProps {
  onClick: () => void;
  icon: string;
};


const style = bemCssModules(IconButtonStyles);

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button
      className={style()}
      onClick={props.onClick}
      styles={{background: 'url(${props.icon})'}}
    />

  )
}

export default IconButton;
