import React from 'react'

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
};


export const Title = ({title, subtitle}: Props) => {
  return (
    <div>
      <h1 className="">{title}</h1>
      {subtitle && <h3 className="">{subtitle}</h3>}
    </div>
  );
};
