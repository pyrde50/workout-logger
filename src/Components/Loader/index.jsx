import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ width, height }) => (
  <ReactLoading type={'bars'} color={'#70C3FF'} height={height} width={width} />
);

export default Loader;
