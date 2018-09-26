import React from 'react';

const Loading = ({isloading}) => {

  if (!isloading) {
    return null;
  }

  return (
    <div className="progress center-align">
      <div className="indeterminate"></div>
    </div>
  )
}

export default Loading;