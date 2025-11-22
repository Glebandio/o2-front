import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";
import { Line } from "@/components/Line";
import Image from "next/image";


export const Calculator = () => {
    return(
        <section className={'calculator'}>
            <h2>Хочешь понять, как это <br/> сработает для тебя?</h2>
            <p>Укажи сумму и выбери модель — и узнай, сколько ты мог бы заработать.</p>
            <div className="calculator__row">
                <div className="calculator__input">
                    <div className="calculator__input-text">
                        Введите данные
                    </div>
                    <div className="calculator__input-container">
                        <label>Депозит, USDT</label>
                        <input type="number"/>
                    </div>
                    <div className="calculator__input-container">
                        <label>Единичный объем, USDT
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="23" height="21" rx="10.5" fill="#D9E5FF"/>
                                <path d="M10.2443 8.20833L11.4932 8.46446L12.7557 8.20833V16H10.2443V8.20833ZM11.5068 7.50735C11.0633 7.50735 10.7014 7.39502 10.4208 7.17034C10.1403 6.93668 10 6.63113 10 6.25368C10 5.86724 10.1403 5.56168 10.4208 5.33701C10.7014 5.11234 11.0633 5 11.5068 5C11.9593 5 12.3213 5.11234 12.5928 5.33701C12.8643 5.56168 13 5.86724 13 6.25368C13 6.63113 12.8643 6.93668 12.5928 7.17034C12.3213 7.39502 11.9593 7.50735 11.5068 7.50735Z" fill="black"/>
                            </svg>
                        </label>
                        <input type="number"/>
                    </div>
                    <div className="calculator__input-model">
                        Выберите модель
                    </div>
                    <div className="calculator__input-select">
                        <div className="calculator__select-cont">
                            <div className="calculator__select-picked">
                            Модель
                            <p>1446_00VIT_MT_9_volsic1filter(MT1filtered)_BYBIT</p>
                            </div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="calculator__select-row">
                            <div className="calculator__select-data">
                                <div className="calculator__select-block">
                                    <p>
                                        <span>Прибыльных сделок</span>
                                    </p>
                                    <div className="calculator__select-score">
                                        94,6%
                                    </div>
                                </div>
                                <div className="calculator__select-block">
                                    <p>
                                        <span>Умность</span>
                                    </p>
                                    <div className="calculator__select-score">
                                        74,6%
                                    </div>
                                </div>
                                <div className="calculator__select-block">
                                    <p>
                                        <span>PnL в день (ед. %)</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#D9E5FF"/>
                                            <path d="M12.0498 11V16M12 8H12.1V8.1H12V8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                    </p>
                                    <div className="calculator__select-score">
                                        17,13
                                    </div>
                                </div>
                                <div className="calculator__select-block">
                                    <p>
                                        <span>PnL на сделку (ед. %)</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#D9E5FF"/>
                                            <path d="M12.0498 11V16M12 8H12.1V8.1H12V8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </p>
                                    <div className="calculator__select-score">
                                        0,92
                                    </div>
                                </div>
                            </div>
                            <div className="calculator__select-graph">
                                <Image width={337} height={217} src={'/images/calculator/graph.png'} alt={''}/>
                            </div>
                        </div>
                        <ButtonPrimary text={'Рассчитать прибыль'} width={767}/>
                    </div>

                </div>
                <div className="calculator__benefit">
                    <p>Потенциальная прибыль</p>

                    <div className="calculator__benefit-point">
                        <p>
                            За неделю, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            24
                        </p>
                    </div>
                    <Line/>
                    <div className="calculator__benefit-point">
                        <p>
                            За месяц, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            102,75
                        </p>
                    </div>
                    <Line/>
                    <div className="calculator__benefit-point">
                        <p>
                            За год, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            1250
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}