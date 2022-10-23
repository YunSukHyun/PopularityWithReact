import React from 'react';
import './legend.css';
const Legend = ({game}) => {
  return (
    <div className='my-legend'>
      <div className='legend-title'>Score</div>
        <div className='legend-scale'>
          <ul className='legend-labels'>
            <li><span style={{background:'#d4af37'}}></span>5points</li>
            <li><span style={{background:'#c0c0c0'}}></span>3points</li>
            {game === "priconne" ? <li><span style={{background:'#cd7f32'}}></span>1points</li> : ''}
          </ul>
        </div>
    </div>
  )
};

export default Legend;