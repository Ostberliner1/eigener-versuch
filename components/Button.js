function Button({buttonText, buttonLink, oncklickHandler}) {
    const nav = (event) => {
        if(oncklickHandler){
            oncklickHandler(event)
        }

    }
    return (
        <button oncklick={oncklickHandler} >{buttonText}</button>
      
    );
  }
  
export default Button;
  