/* eslint-disable no-mixed-operators */
/* eslint-disable radix */

'use client';

import React, { useState } from 'react';

import styles from './RangeInput.module.css';

const markers = [45, 50, 55, 60, 65];
const min = 45;
const max = 65;

function RangeInput({
  onChange,
  ...rest
}: {
  onChange: (val: number) => void;
}) {
  const [value, setValue] = useState(55);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setValue(parseInt(val));
    onChange(parseInt(val));
  };

  return (
    <div
      className={styles.root}
      {...rest}
    >
      <span className="text-sm text-white">Taille</span>
      <div>
        <div className={styles.markers}>
          {markers.map(marker => (
            <span
              key={marker}
              className={styles.rangeMarkerStyle}
              style={{
                left: `${(marker - min) / (max - min) * 100}%`,
              }}
            >
              {marker}
            </span>
          ))}
        </div>
        <div className={styles.markers}>
          <span
            className={styles.baseRangeThumbStyle}
            data-val={value}
            style={{
              left: `${(value - min) / (max - min) * 100}%`,
            }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={handleChange}
          className={styles.baseRangeInputStyle}
        />
      </div>
    </div>
  );
}

export default RangeInput;
