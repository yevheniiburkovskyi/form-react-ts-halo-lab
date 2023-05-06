import React from 'react';

import classes from './CustomButton.module.scss';

interface IProps {
  title: string;
}

const CustomButton: React.FC<IProps> = ({ title }) => {
  return <button className={classes.button}>{title}</button>;
};

export default CustomButton;
