import React from 'react';

const PopupSmall = ({ isOpen, onClose, children }) => {
  return (
    <div className={`popup detail_popup ${isOpen ? 'open' : ''}`}>
      <div className="table_dv">
        <div className='table_cell'>
            <button className="x_btn" onClick={onClose}></button>
            <div className='_inner'>
            
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSmall;
