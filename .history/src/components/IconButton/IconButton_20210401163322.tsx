import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as IconButtonStyles } from './IconButton.module.scss';

interface IconButtonProps {

};


const style = bemCssModules(IconButtonStyles);

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <div className={style()}>

    </div>
  )
}

export default IconButton;
