import Image from "next/image";

export const Piramida = () => {
    return(
        <section className={'piramida'}>
            <Image width={100} height={100} src={"/images/blocks/piramid.svg"} alt={""} />
        </section>
    )
}