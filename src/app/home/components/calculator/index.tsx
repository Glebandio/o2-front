


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

                </div>
            </div>
        </section>
    )
}