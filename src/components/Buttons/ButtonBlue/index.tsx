import Link from "next/link";

interface ButtonBLueProps{
    text: string,
}

export const ButtonBlue = (props: ButtonBLueProps) => {
    return(

        <Link href={'/auth'} className="button_blue" >
                {props.text}
        </Link>

    )
}