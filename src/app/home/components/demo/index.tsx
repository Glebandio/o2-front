import Image from "next/image";



export const Demo = () => {
    return(
        <section className={'demo'}>
            <Image width={100} height={100} src={"/images/blocks/demo.svg"} alt={""} />
        </section>
    )
}