export const Button = ({buttonText="Далее", buttonType, isDisabled}) => {
    return (
        <button disabled={isDisabled} type={buttonType === "submit"? "submit":"button"} id="next-btn">
              {buttonText}
        </button>
    )
}