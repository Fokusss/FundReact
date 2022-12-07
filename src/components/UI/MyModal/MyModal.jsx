import React from "react";
import style from './MyModal.module.css'

const MyModal = ({children, visable, setVisable}) => {

  const rootClasses = [style.modal]

  if (visable) {
    rootClasses.push(style.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisable(false)}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;