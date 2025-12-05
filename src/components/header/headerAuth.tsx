import Image from "next/image";



export const HeaderAuth = () =>{
    return (
        <header className={'header-auth'}>
            <div className="container">
                <Image className="logo" width={100} height={100} src={'/images/O2_Trading.png'} alt=""/>

            </div>
        </header>
    )
}