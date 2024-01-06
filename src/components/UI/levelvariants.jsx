 export const Levelquestion = ({id,text,isSelected,onClick}) => {
    return (
        <li className="variant-wrapper" onClick={onClick}>
            <input 
            required 
            type="radio" 
            name={id} 
            id={id}
            checked={isSelected} />
            <label htmlFor={id}>{text}</label>
        </li>
    )
}

