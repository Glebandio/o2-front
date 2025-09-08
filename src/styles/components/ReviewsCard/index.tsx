import Image from "next/image";


export const ReviewsCard = () => {
    return(
        <div className="reviews__card">
            <div className="reviews__card-info">
                <div className="reviews__card-model">
                    <p>Модель</p>
                    <div className={'reviews__card-name'}>
                        1446_00VIT_MT_9_v<br/>olsic1filter_BYBIT
                    </div>
                </div>
                <div className="reviews__card-results">
                    <div className="reviews__card-point">
                        <div className="reviews__card-pointName">
                            Прибыль:
                        </div>
                        <div className="reviews__card-result">
                            +2637 $
                        </div>
                    </div>
                    <div className="reviews__card-point">
                        <div className="reviews__card-pointName">
                            Сумма вложений:
                        </div>
                        <div className="reviews__card-result">
                            3 500 $
                        </div>
                    </div>
                    <div className="reviews__card-point">
                        <div className="reviews__card-pointName">
                            Доходность:
                        </div>
                        <div className="reviews__card-result">
                            78 %
                        </div>
                    </div>
                    <div className="reviews__card-point">
                        <div className="reviews__card-pointName">
                            Период:
                        </div>
                        <div className="reviews__card-result">
                            12 мес
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews__card-man">
                <div className="reviews__card-manInfo">
                    <Image width={90} height={90} src={'/images/reviews/person.png'} alt={''}/>
                    <div className="reviews__card-about">
                        <div className="reviews__card-manName">
                            Игорь<br/>Васильев
                        </div>
                        <div className="reviews__card-start">
                            Инвестирует с 05.24
                        </div>
                    </div>
                </div>
                <div className="reviews__card-desc">
                    «Каждый из нас понимает очевидную вещь: экономическая повестка сегодняшнего дня позволяет оценить значение новых принципов формирования материально-технической и кадровой базы.»
                </div>
            </div>
        </div>
    )
}