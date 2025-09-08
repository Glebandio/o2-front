import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";
import Image from "next/image";


export const Hero = () => {
    return(
        <>
            <div className="hero">
                <h1>
                    <span>Больше прибыли</span>
                    <br/>
                    с алгоритмическим
                    <br/>
                    трейдингом
                </h1>
                <p>
                    <span>Эта технология меняет рынок<span className={'comma'}>,</span>
                    </span><br/>
                    у тебя есть шанс увидеть её историю изнутри.
                </p>
                <ButtonPrimary width={466} text={'начать зарабатывать'}/>
                <div className="hero__light">
                </div>
                <div className="hero__light">
                </div>
                <div className="hero__light">
                </div>
                <Image className={'hero__notebook'} width={100} height={100} src={'/images/hero/notebook.svg'} alt={''}/>
            </div>
        </>
    )
}