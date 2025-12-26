
import Image from 'next/image';



export const Advantages = () => {
    return(
       <section className={'advantages'}>
            <div className="advantages_text">
                <div className="advantages_text-block">
                    <h2>Изучите сервис и модели без риска
                        на демо-счёте</h2>
                    <p>
                        Подключите <b>ДЕМО-СЧЁТ</b>, выберите модель
                        исследуйте интерфейс и показатели без риска потери денег
                    </p>
                </div>
                <button>
                    начать зарабатывать
                </button>
            </div>
            <div className="advantages_image">
                <Image width={1064} height={608} src="/images/notebook.png" alt="notebook" />
            </div>
       </section>
    )
}