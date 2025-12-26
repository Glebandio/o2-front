import Image from "next/image";
import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";

export const Message = () => {
    return(
        <section className={'message'}>
            <h2>Мы создали уникальный продукт, <br/> у которого нет аналогов</h2>
            <p>Если вы знаете похожий сервис - напишите об этом</p>
            <ButtonPrimary width={498} text={'написать telegram'}/>
        </section>
    )
}