import React from "react";

export const ListImgItem = ({itemId, itemText, isSelected, imgsrc,alt}) => {
    return (
        <li className="variant-wrapper">
                <input required type="radio" name={itemId} id={itemId} checked={isSelected}/>
                <label htmlFor={itemId}>
                  <img src={imgsrc} alt={alt}/>
                  <p>{itemText}</p>
                </label>
              </li>
    )
}