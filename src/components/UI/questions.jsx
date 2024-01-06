export const QuestionInput = ({itemText,itemId, isSelected,onClick}) => {
    return (
        
            
              <li className="variant-wrapper" onClick={onClick}>
              <input
                 required
                 type="radio"
                 name={itemId}
                 id={itemId}
                 checked={isSelected} />
                <label htmlFor={itemId}>
                 
                {itemText}</label>
               </li> 
              
    )
}

