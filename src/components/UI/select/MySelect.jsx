import React from "react";
import style from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={style.select}>
      <option disabled value=''>{defaultValue}</option>
      {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.name}</option>)}
    </select>
  )
}

export default MySelect;