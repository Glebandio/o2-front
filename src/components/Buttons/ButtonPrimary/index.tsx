

interface ButtonPrimaryProps{
    text: string,
    width: number
}

export const ButtonPrimary = (props :ButtonPrimaryProps) => {
    return(
        <>
            <div style={{ width: `${props.width/16}rem` }}>
                <button className={'button__primary'}>
                    {props.text}
                </button>
            </div>
        </>
    )
}