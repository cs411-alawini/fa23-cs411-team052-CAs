import React from 'react';
const Info = () => {
  const documentURL = 'https://docs.google.com/document/d/16LAfV3am1uf7Oe7P17N-rHa85XE5jF_ApVa5t-i43yU/edit?usp=sharing';
  return (
    <div>
      <iframe src={documentURL} width="100%" height="1000px"/>
    </div>
  );
};
export default Info;