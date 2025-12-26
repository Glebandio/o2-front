import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";
import { Line } from "@/components/Line";
import Image from "next/image";
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import {TRADES_STATS} from "@/api/urls";
import {TradeStat} from "@/interfaces/models";


export const Calculator = () => {
    const [data, setData] = useState<TradeStat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Состояния для select
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState<TradeStat | null>(null);

    // Состояние для единичного объема
    const [unitVolume, setUnitVolume] = useState<number>(10); // Значение по умолчанию
    const [volumeError, setVolumeError] = useState<string | null>(null);

    // Состояния для рассчитанной прибыли
    const [weeklyProfit, setWeeklyProfit] = useState<number>(0);
    const [monthlyProfit, setMonthlyProfit] = useState<number>(0);
    const [yearlyProfit, setYearlyProfit] = useState<number>(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Отправляем запрос на:', TRADES_STATS);

            const response = await axios.get(TRADES_STATS);
            console.log('Получен ответ:', response);

            if (response.data && Array.isArray(response.data)) {
                setData(response.data);
                // Устанавливаем первую модель как выбранную по умолчанию
                if (response.data.length > 0) {
                    setSelectedModel(response.data[0]);
                }
            } else {
                console.error('Некорректный формат данных:', response.data);
                setError('Некорректный формат данных от сервера');
            }
        } catch (error) {
            console.error('Полная ошибка:', error);
            if (axios.isAxiosError(error)) {
                console.error('Статус ошибки:', error.response?.status);
                console.error('Данные ошибки:', error.response?.data);
                console.error('Заголовки ошибки:', error.response?.headers);
                setError(`Ошибка запроса: ${error.message}`);
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    // Функция для расчета прибыли
    const calculateProfit = useCallback(() => {
        if (!selectedModel) return;

        const pnlPerDay = selectedModel.pnl_per_day_pct;
        const volume = unitVolume;

        // Формула: (pnl_per_day_pct * единичный объем) / 100 * количество дней
        const dailyProfit = (pnlPerDay * volume) / 100;

        setWeeklyProfit(Number((dailyProfit * 7).toFixed(2)));
        setMonthlyProfit(Number((dailyProfit * 30).toFixed(2)));
        setYearlyProfit(Number((dailyProfit * 365).toFixed(2)));
    }, [selectedModel, unitVolume]);

    // Обработчик изменения единичного объема
    const handleUnitVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Проверка на пустое значение
        if (value === '') {
            setUnitVolume(0);
            setVolumeError('Введите значение');
            return;
        }

        const numValue = parseFloat(value);

        // Проверка на число
        if (isNaN(numValue)) {
            setVolumeError('Введите число');
            return;
        }

        // Проверка диапазона
        if (numValue < 1) {
            setUnitVolume(1);
            setVolumeError('Минимальное значение: 1');
        } else if (numValue > 100) {
            setUnitVolume(100);
            setVolumeError('Максимальное значение: 100');
        } else {
            setUnitVolume(numValue);
            setVolumeError(null);
        }
    };

    // Обработчик выбора модели
    const handleModelSelect = (model: TradeStat) => {
        setSelectedModel(model);
        setIsSelectOpen(false);
    };

    const toggleSelect = () => {
        if (data.length > 0) {
            setIsSelectOpen(!isSelectOpen);
        }
    };

    // Расчет прибыли при изменении модели или объема
    useEffect(() => {
        if (selectedModel && unitVolume > 0) {
            calculateProfit();
        }
    }, [selectedModel, unitVolume, calculateProfit]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('.calculator__select-cont')) {
                setIsSelectOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const formatNumber = (num: number): string => {
        return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <section className={'calculator'}>
            <h2>Хочешь понять, как это <br/> сработает для тебя?</h2>
            <p>Укажи сумму и выбери модель — и узнай, сколько ты мог бы заработать.</p>
            {loading && <div>Загрузка данных...</div>}
            {error && <div style={{color: 'red'}}>Ошибка: {error}</div>}

            <div className="calculator__row">
                <div className="calculator__input">
                    <div className="calculator__input-text">
                        Введите данные
                    </div>
                    <div className="calculator__input-container">
                        <label>Депозит, USDT</label>
                        <input type="number" value={100} readOnly={true}/>
                    </div>
                    <div className="calculator__input-container">
                        <label>Единичный объем, USDT
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="23" height="21" rx="10.5" fill="#D9E5FF"/>
                                <path d="M10.2443 8.20833L11.4932 8.46446L12.7557 8.20833V16H10.2443V8.20833ZM11.5068 7.50735C11.0633 7.50735 10.7014 7.39502 10.4208 7.17034C10.1403 6.93668 10 6.63113 10 6.25368C10 5.86724 10.1403 5.56168 10.4208 5.33701C10.7014 5.11234 11.0633 5 11.5068 5C11.9593 5 12.3213 5.11234 12.5928 5.33701C12.8643 5.56168 13 5.86724 13 6.25368C13 6.63113 12.8643 6.93668 12.5928 7.17034C12.3213 7.39502 11.9593 7.50735 11.5068 7.50735Z" fill="black"/>
                            </svg>
                        </label>
                        <input
                            type="number"
                            value={unitVolume}
                            onChange={handleUnitVolumeChange}
                            min={1}
                            max={100}
                            step={1}
                        />
                        {volumeError && (
                            <div className="calculator__input-error" style={{
                                color: 'red',
                                fontSize: '12px',
                                marginTop: '4px'
                            }}>
                                {volumeError}
                            </div>
                        )}
                    </div>
                    <div className="calculator__input-model">
                        Выберите модель
                    </div>
                    <div className="calculator__input-select">
                        <div className="calculator__select-cont" onClick={toggleSelect}>
                            <div className="calculator__select-picked">
                                <span className="calculator__select-label">Модель</span>
                                <p className="calculator__selected-value">
                                    {selectedModel?.new_model_name || "Загрузка..."}
                                </p>
                            </div>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    transform: isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            {isSelectOpen && data.length > 0 && (
                                <div className="calculator__select-dropdown">
                                    {data.map((model, index) => (
                                        <div
                                            key={index}
                                            className={`calculator__select-option ${
                                                selectedModel?.new_model_name === model.new_model_name
                                                    ? 'calculator__select-option--active'
                                                    : ''
                                            }`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleModelSelect(model);
                                            }}
                                        >
                                            <span className="calculator__option-name">
                                                {model.new_model_name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {selectedModel && (
                            <div className="calculator__select-row">
                                <div className="calculator__select-data">
                                    <div className="calculator__select-block">
                                        <p>
                                            <span>Прибыльных сделок</span>
                                        </p>
                                        <div className="calculator__select-score">
                                            {selectedModel.profitable_trades_pct?.toFixed(1)}%
                                        </div>
                                    </div>
                                    <div className="calculator__select-block">
                                        <p>
                                            <span>Умность</span>
                                        </p>
                                        <div className="calculator__select-score">
                                            {selectedModel.smartness_pct?.toFixed(1)}%
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
                                            {selectedModel.pnl_per_day_pct?.toFixed(2)}%
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
                                            {selectedModel.pnl_per_trade_pct?.toFixed(2)}%
                                        </div>
                                    </div>
                                </div>
                                <div className="calculator__select-graph">
                                    <Image width={337} height={217} src={'/images/calculator/graph.png'} alt={''}/>
                                </div>
                            </div>
                        )}

                        <ButtonPrimary
                            text={'Рассчитать прибыль'}
                            width={767}
                        />
                    </div>
                </div>
                <div className="calculator__benefit">
                    <p>Потенциальная прибыль</p>
                    <div className="calculator__benefit-point">
                        <p>
                            За неделю, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            {weeklyProfit > 0 ? formatNumber(weeklyProfit) : '—'}
                        </p>
                    </div>
                    <Line/>
                    <div className="calculator__benefit-point">
                        <p>
                            За месяц, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            {monthlyProfit > 0 ? formatNumber(monthlyProfit) : '—'}
                        </p>
                    </div>
                    <Line/>
                    <div className="calculator__benefit-point">
                        <p>
                            За год, USDT
                        </p>
                        <p className='calculator__benefit-number'>
                            {yearlyProfit > 0 ? formatNumber(yearlyProfit) : '—'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};