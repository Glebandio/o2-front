

interface ButtonWhiteOutlinedProps {
    text:string
}

export const ButtonWhiteOutlined = (props :ButtonWhiteOutlinedProps) => {
    return(
        <>
            <button className={'button__white-outlined'}>
                {props.text}
            </button>
        </>
    )
}