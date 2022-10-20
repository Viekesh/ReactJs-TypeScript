import React from 'react';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background:"snow", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"-15px"}}
        onClick={onClick}
      />
    );
}

export default NextArrow;