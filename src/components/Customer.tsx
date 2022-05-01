import React from 'react';

interface IProps{
    name : string;
    age : number;
    title : string;
}


const Customer:React.FC<IProps> = (IProps) => {
    console.log(IProps.name,IProps.age,IProps.title);
  return (

    <div>Customer</div>
  )
}

export default Customer