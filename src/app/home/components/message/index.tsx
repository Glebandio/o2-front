import Image from "next/image";

export const Message = () => {
    return(
        <section className={'message'}>
            <Image width={100} height={100} src={"/images/blocks/message.svg"} alt={""} />
        </section>
    )
}