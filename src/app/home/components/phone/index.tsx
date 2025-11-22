import Image from "next/image";

export const Phone = () => {
    return(
        <section className={'phone'}>
            <Image width={100} height={100} src={"/images/blocks/phone.svg"} alt={""} />
        </section>
    )
}