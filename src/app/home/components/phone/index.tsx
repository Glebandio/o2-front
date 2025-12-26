import Image from "next/image";
import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";

export const Phone = () => {
    return(
        <section className={'phone'}>
            <div className="phone_blue"></div>

            <div className="phone_text">
                <h2>Остались вопросы?</h2>
                <p>Если вы столкнулись с проблемой или что-то осталось непонятным — мы на связи</p>
                <ButtonPrimary text={'написать telegram'} width={498}/>
            </div>

            <Image className={'phone_phone'} width={374} height={766} src={'/images/phone.png'} alt={''}/>
            <Image className={'phone_heart'} width={130.9} height={114.835} src={'/images/heart.png'} alt={''} />
            <Image className={'phone_star'} width={104.993} height={97.442} src={'/images/star.png'} alt={''} />
            <Image className={'phone_finger'} width={158} height={190} src={'/images/finger.png'} alt={''} />
            <div className="phone_out">
                У меня два дня подряд просадка,&nbsp;стоит переживать?
            </div>
            <div className="phone_from">
                Нет, это часть торгового процесса. Главное — следить за&nbsp;общей стратегией.
            </div>
        </section>
    )
}