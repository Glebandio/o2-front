
interface ButtonBLueProps{
    text: string,
}

export const ButtonBlue = (props: ButtonBLueProps) => {
    return(

        <button className="button_blue" >
                {props.text}
        </button>

    )
}