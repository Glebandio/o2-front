import Link from "next/link";


interface ButtonWhiteOutlinedProps {
    text:string
}

export const ButtonWhiteOutlined = (props :ButtonWhiteOutlinedProps) => {
    return(
        <>
            <Link href={'/registration'} className={'button__white-outlined'}>
                {props.text}
            </Link>
        </>
    )
}