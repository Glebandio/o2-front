'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import {MODEL_SCORES, TRADES_STATS, TRADES_STATS_DAILY} from "@/api/urls";
import {ModelsProps, TradeStat} from "@/interfaces/models";
import { useRouter } from "next/navigation";

// Типы для API ключей
interface ApiKey {
    id: number;
    public: string;
    secret: string;
    type: 'bybit' | 'binance';
    created_at?: string;
    is_active?: boolean;
}

interface UserKeysResponse {
    bybit_keys: ApiKey[];
    binance_keys: ApiKey[];
    active_sessions: never[];
    completed_sessions: never[];
}

interface SessionData {
    name: string;
    model: string;
    key_id: number;
    exchange: 'bybit' | 'binance';
    trade_volume: number;
    settings: {
        limited_trades: boolean;
        max_trades: number | null;
        limited_time: boolean;
        time_value: number | null;
        time_unit: 'minutes' | 'hours' | 'days' | null;
        unlimited: boolean;
    };
    created_at: string;
    start_time?: string;
}

export const Models = () => {
    const [models, setModels] = useState<TradeStat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState<TradeStat | null>(null);

    const [availableKeys, setAvailableKeys] = useState<ApiKey[]>([]);
    const [selectedKeyId, setSelectedKeyId] = useState<number | null>(null);
    const [tradeVolume, setTradeVolume] = useState<string>("");
    const [isLimitedTrades, setIsLimitedTrades] = useState(false);
    const [maxTrades, setMaxTrades] = useState<string>("");
    const [isLimitedTime, setIsLimitedTime] = useState(false);
    const [timeValue, setTimeValue] = useState<string>("");
    const [timeUnit, setTimeUnit] = useState<'hours' | 'days' | 'minutes'>('hours');
    const [isUnlimited, setIsUnlimited] = useState(true);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${TRADES_STATS}`);
                setModels(response.data);
                setError(null);
            } catch (err) {
                console.error('=== ОШИБКА ПРИ ЗАПРОСЕ ===', err);
                setError('Ошибка загрузки моделей');
            } finally {
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    const getToken = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    };

    const handleMoreDetailsClick = (model: TradeStat) => {
        const modelName = model.new_model_name || `model-${model.id}`;
        const slug = modelName
            .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
            .replace(/\-\-+/g, '-') // Заменяем множественные дефисы на один
            .replace(/^-+/, '') // Удаляем дефисы в начале
            .replace(/-+$/, ''); // Удаляем дефисы в конце

        // Переходим на страницу деталей модели
        router.push(`/account/${slug}`);
    };

    const getId = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('id');
        }
        return null;
    };

    const fetchUserKeys = async (): Promise<void> => {
        const token = getToken();
        const id = getId();

        if (!token || !id) {
            console.log("Токен или ID не найдены");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/admin-accounts/user/my-keys-sessions/`, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
            });

            if (response.ok) {
                const data: UserKeysResponse = await response.json();
                const allKeys: ApiKey[] = [
                    ...(data.bybit_keys || []).map((key: ApiKey) => ({ ...key, type: 'bybit' as const })),
                    ...(data.binance_keys || []).map((key: ApiKey) => ({ ...key, type: 'binance' as const }))
                ];
                setAvailableKeys(allKeys);

                if (allKeys.length > 0) {
                    setSelectedKeyId(allKeys[0].id);
                }
            }
        } catch (err) {
            console.error('Ошибка загрузки ключей:', err);
        }
    };

    const getCurrentDateISO = (): string => {
        return new Date().toISOString();
    };

    const getCurrentDateLocal = (): string => {
        return new Date().toLocaleString('ru-RU');
    };

    const handleConnectClick = async (model: TradeStat): Promise<void> => {
        setSelectedModel(model);
        await fetchUserKeys();
        setIsConnectModalOpen(true);
    };

    const handleAddSession = async (): Promise<void> => {
        if (!selectedModel || !selectedKeyId || !tradeVolume) {
            alert("Заполните обязательные поля: выберите ключ и укажите объем сделки");
            return;
        }

        const token = getToken();
        if (!token) {
            alert("Токен не найден");
            return;
        }

        // Получаем выбранный ключ для определения биржи
        const selectedKey = availableKeys.find(key => key.id === selectedKeyId);
        if (!selectedKey) {
            alert("Выбранный ключ не найден");
            return;
        }

        // Получаем текущую дату и время
        const currentDate = getCurrentDateISO();
        const localDate = getCurrentDateLocal();

        const sessionData: SessionData = {
            name: selectedModel.new_model_name || `Модель ${selectedModel.id || ''}`,
            model: selectedModel.new_model_name || `Модель ${selectedModel.id || ''}`,
            key_id: selectedKeyId,
            exchange: selectedKey.type,
            trade_volume: parseFloat(tradeVolume),
            settings: {
                limited_trades: isLimitedTrades,
                max_trades: isLimitedTrades && maxTrades ? parseInt(maxTrades) : null,
                limited_time: isLimitedTime,
                time_value: isLimitedTime && timeValue ? parseInt(timeValue) : null,
                time_unit: isLimitedTime ? timeUnit : null,
                unlimited: isUnlimited
            },
            // Добавляем дату создания (ISO формат)
            created_at: currentDate,
            // Можно также добавить время начала сессии
            start_time: currentDate
        };

        console.log('Отправляемые данные сессии:', {
            ...sessionData,
            created_at_local: localDate
        });

        try {
            const response = await fetch(`http://localhost:8000/api/admin-accounts/user/add-session/`, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify(sessionData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Сессия успешно создана!\nДата создания: ${localDate}`);
                setIsConnectModalOpen(false);
                resetForm();
            } else {
                const errorData = await response.json();
                alert(`Ошибка: ${errorData.error || "Не удалось создать сессию"}`);
            }
        } catch (err) {
            console.error('Ошибка создания сессии:', err);
            alert("Ошибка соединения с сервером");
        }
    };

    const resetForm = (): void => {
        setSelectedKeyId(null);
        setTradeVolume("");
        setIsLimitedTrades(false);
        setMaxTrades("");
        setIsLimitedTime(false);
        setTimeValue("");
        setTimeUnit('hours');
        setIsUnlimited(true);
    };

    const closeModal = (): void => {
        setIsConnectModalOpen(false);
        setSelectedModel(null);
        resetForm();
    };

    const handleKeyChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = e.target.value;
        setSelectedKeyId(value ? parseInt(value) : null);
    };

    const handleTimeUnitChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setTimeUnit(e.target.value as 'hours' | 'days' | 'minutes');
    };

    // Если используется TypeScript с строгими настройками, добавьте обработку ошибок загрузки
    if (loading) {
        return (
            <div className="models_right_part">
                <p className="models_title">Модели</p>
                <div className="loading">Загрузка...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="models_right_part">
                <p className="models_title">Модели</p>
                <div className="error">{error}</div>
            </div>
        );
    }

    return (
        <>
            <div className="models_right_part">
                <p className="models_title">
                    Модели
                </p>
                <div className="container_models_div">
                    {models.map((model, index) => {
                        const profitablePercent = model.profitable_trades_pct

                        return (
                            <div className="container_models" key={model.new_model_name || index}>
                                <div className="container_models_card">
                                    <div className="container_models_top">
                                        <p className="container_models_top_title">Модель</p>
                                        <p className="container_models_top_name">
                                            {model.new_model_name}
                                        </p>
                                    </div>
                                    <div className="container_models_bottom">
                                        <div className="container_models_bottom_percent">
                                            <div className="percent_div_left_part">
                                                <p className="percent_left_part_title">Прибыльных сделок</p>
                                                <p className="percent_left_part_profit">
                                                    {profitablePercent.toFixed(1)}%
                                                </p>
                                            </div>
                                            <div className="percent_div_right_part">
                                                <p className="percent_right_part_title">Умность</p>
                                                <p className="percent_right_part_profit">
                                                    {model.smartness_pct}%
                                                </p>
                                            </div>
                                        </div>
                                        <Image width={300} height={300} className="chart" src="/images/chart.png" alt="График"/>
                                        <div className="data_chart_div">
                                            <div className="data_chart_element">
                                                <p className="data_chart_name">PnL на сделку (ед. %)</p>
                                                <p className="data_chart">
                                                    {model.pnl_per_trade_pct}
                                                </p>
                                            </div>
                                            <div className="data_chart_element">
                                                <p className="data_chart_name">Время в сделке</p>
                                                <p className="data_chart">
                                                    {model.time_in_trade_text}
                                                </p>
                                            </div>
                                            <div className="data_chart_element">
                                                <p className="data_chart_name">PnL в день (в ед.%)</p>
                                                <p className="data_chart">
                                                    {model.pnl_per_day_pct}
                                                </p>
                                            </div>
                                            <div className="data_chart_element_not_border">
                                                <p className="data_chart_name_not_border">Дней с просадкой </p>
                                                <p className="data_chart_not_border">
                                                    {model.drawdown_days_pct.toFixed(0)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="container_models_buttons">
                                            <button
                                                className="models_button_connect"
                                                onClick={() => handleConnectClick(model)}
                                            >
                                                Подключить
                                            </button>
                                            <button className="models_button_more"
                                                    onClick={() => handleMoreDetailsClick(model)}
                                            >
                                                Подробнее
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Модальное окно подключения */}
            {isConnectModalOpen && selectedModel && (
                <div className="modal_overlay">
                    <div className="modal_window connect_modal">
                        <h3 className="modal_title">{selectedModel.new_model_name || `${selectedModel.id || ''}`}</h3>

                        <div className="modal-form">

                            <div className="modal_section">
                                <label className="modal_label">Счёт</label>
                                <select
                                    className="modal_select"
                                    value={selectedKeyId || ""}
                                    onChange={handleKeyChange}
                                >
                                    <option value="">Счёт</option>
                                    {availableKeys.map((key: ApiKey) => (
                                        <option key={key.id} value={key.id}>
                                            {key.type.toUpperCase()} - ID: {key.id} (Public: {key.public.substring(0, 10)}...)
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="modal_section">
                                <label className="modal_label">
                                    Объем сделки
                                </label>
                                <input
                                    type="number"
                                    className="modal_input"
                                    value={tradeVolume}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTradeVolume(e.target.value)}
                                    placeholder="Введите объем сделки"
                                    min="0"
                                    step="0.01"
                                />
                            </div>

                            <div className="modal_blocks">

                                <div className="modal_section mini">
                                    <p>Ограниченное количество сделок</p>

                                    <div className="conditional_input">
                                        <label htmlFor="">Количество сделок</label>
                                        <input
                                            type="number"
                                            className="modal_input"
                                            value={maxTrades}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxTrades(e.target.value)}
                                            placeholder=""
                                            min="1"
                                            disabled={!isLimitedTrades}
                                        />
                                    </div>

                                    <div className="checkbox_row">
                                        <input
                                            type="checkbox"
                                            id="limited_trades"
                                            checked={isLimitedTrades}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsLimitedTrades(e.target.checked)}
                                        />
                                    </div>
                                </div>

                                <div className="modal_section mini">
                                    <p>Ограниченное время работы</p>

                                    <div className="time_settings">
                                        <label className={'ultracustom'} htmlFor="">Задать продолжительность</label>

                                        <div className="time_input_group">

                                            <input
                                                type="number"
                                                className="modal_input time_input"
                                                value={timeValue}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeValue(e.target.value)}
                                                placeholder="Введите значение"
                                                min="1"
                                                disabled={!isLimitedTime}
                                            />
                                            <select
                                                className="time_unit_select"
                                                value={timeUnit}
                                                onChange={handleTimeUnitChange}
                                                disabled={!isLimitedTime}
                                            >
                                                <option value="minutes">Мин</option>
                                                <option value="hours">Час</option>
                                                <option value="days">Дней</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="checkbox_row">
                                        <input
                                            type="checkbox"
                                            id="limited_time"
                                            checked={isLimitedTime}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsLimitedTime(e.target.checked)}
                                        />
                                    </div>
                                </div>

                                <div className="modal_section mini-blue">
                                    <p>
                                        Бессрочно
                                    </p>
                                    <label className={'ultracustom'} htmlFor="">До момента ликвидации</label>


                                    <div className="checkbox_row">
                                        <input
                                            type="checkbox"
                                            id="unlimited"
                                            checked={isUnlimited}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsUnlimited(e.target.checked)}
                                        />

                                    </div>
                                </div>

                            </div>

                            <div className="modal_buttons">
                                <button
                                    className="modal_button_connect"
                                    onClick={handleAddSession}
                                >
                                    Подключить
                                </button>
                            </div>

                            <button
                                className="modal_close_button"
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M12.293 0.292969C12.6835 -0.0975498 13.3165 -0.0975384 13.707 0.292969C14.0975 0.683499 14.0975 1.31653 13.707 1.70703L8.41406 7L13.707 12.293C14.0974 12.6835 14.0975 13.3165 13.707 13.707C13.3165 14.0975 12.6835 14.0974 12.293 13.707L7 8.41406L1.70703 13.707C1.31653 14.0975 0.683499 14.0975 0.292969 13.707C-0.0975384 13.3165 -0.0975498 12.6835 0.292969 12.293L5.58594 7L0.292969 1.70703C-0.0975555 1.31651 -0.0975555 0.683493 0.292969 0.292969C0.683493 -0.0975555 1.31651 -0.0975555 1.70703 0.292969L7 5.58594L12.293 0.292969Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .modal_overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }

                .connect_modal {
                    padding: 0;
                    width: 29rem;
                    position: relative;
                    gap: 0;
                    background: transparent !important;
                }
                
                

                .modal_title {
                    font-weight: 600;
                    text-align: center;
                    background: linear-gradient(86deg, #004DFF 21.33%, #A3BFFF 149.74%);
                    color: #FFF;
                    font-size: 1.25rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 120%; /* 24px */
                    letter-spacing: -0.6px;
                    width: 100%;
                    padding: 1rem 0;
                    border-radius: 1rem;
                }
                
                .mini-blue{
                    width: 12.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                    border-radius: 0.5rem;
                    background: #D9E5FF;
                    padding: 0.625rem;
                }

                .mini-blue p{
                    font-size: 0.875rem;
                }
                
                .mini-blue label{
                    font-size: 0.875rem;
                }
                
                .modal-form{
                    background: #fff !important;
                    width: 100%;
                    padding: 1rem;
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .mini{
                    width: 12.75rem;
                    border-radius: 0.5rem;
                    background: #F7F8FA;
                    padding: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .mini input{
                    margin: 1rem 0 0 0 ;
                }

                .mini p{
                    font-size: 0.875rem;
                }

                .mini label{
                    font-size: 0.8rem;
                }
                
                .modal_blocks{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .ultracustom{
                    color: #727272;
                    width: 100%;
                }

                .date_info {
                    background: #f8f9fa;
                    padding: 12px;
                    border-radius: 6px;
                    margin-bottom: 20px;
                    border-left: 4px solid #007bff;
                }

                .date_label {
                    font-size: 13px;
                    color: #666;
                    margin: 0 0 5px 0;
                }

                .current_date {
                    font-size: 14px;
                    font-weight: 600;
                    color: #007bff;
                    margin: 0;
                }
                

                .modal_label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #333;
                }

                .required {
                    color: #dc3545;
                }
                
                .modal_input{
                    margin-top: 0!important;
                }

                .modal_select, .modal_input {
                    width: 100%;
                    padding: 10px 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 14px;
                    box-sizing: border-box;
                }

                .modal_select:focus, .modal_input:focus {
                    outline: none;
                    border-color: #007bff;
                    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
                }

                .modal_select:disabled, .modal_input:disabled {
                    background-color: #f5f5f5;
                    cursor: not-allowed;
                    opacity: 0.6;
                }

                .exchange_hint {
                    font-size: 12px;
                    color: #666;
                    margin-top: 5px;
                }

                .exchange_type {
                    font-weight: 600;
                    color: #007bff;
                }

                .checkbox_row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .checkbox_label {
                    font-size: 14px;
                    color: #333;
                    cursor: pointer;
                    user-select: none;
                }

                

                .time_input_group {
                    display: flex;
                    gap: 10px;
                }

                .time_input {
                    flex: 2;
                }

                .time_unit_select {
                    flex: 1;
                    padding: 0.5rem;
                    border-radius: 6px;
                    font-size: 0.875rem;
                }

                .time_unit_select:disabled {
                    background-color: #f5f5f5;
                    cursor: not-allowed;
                    opacity: 0.6;
                }

                .modal_buttons {
                    display: flex;
                    gap: 15px;
                    margin-top: 30px;
                }

                .modal_button_connect {
                    width: 100%;
                    background: linear-gradient(83deg, #004DFF 18.72%, #A3BFFF 107.91%);
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.2s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }

                .modal_button_connect:hover {
                    background: #0056b3;
                }

                .modal_button_cancel {
                    flex: 1;
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .modal_button_cancel:hover {
                    background: #545b62;
                }

                .modal_close_button {
                    position: absolute;
                    top: -2rem;
                    right: -2rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    border-radius: 400px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    width: 2rem;
                    height: 2rem;
                }

                

                /* Стили для скролла */
                .connect_modal::-webkit-scrollbar {
                    width: 6px;
                }

                .connect_modal::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 3px;
                }

                .connect_modal::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 3px;
                }

                .connect_modal::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </>
    );
};