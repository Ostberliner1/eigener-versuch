function Button({buttonText, buttonLink, onClickHandler}) {
    const nav = (event) => {
        if(oncklickHandler){
            oncklickHandler(event)
        }

    }
    return (
        <button onClick={onClickHandler} >{buttonText}</button>
      
    );
  }
  
export default Button;
  