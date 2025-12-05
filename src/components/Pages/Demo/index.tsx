'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import {USER_INFO} from "@/api/urls";
import {ApiKey, Session, UserData} from "@/interfaces/userData";

export const Demo = () => {
    const [isModalBybitOpen, setIsModalBybitOpen] = useState<boolean>(false);
    const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Состояния для формы
    const [publicKey, setPublicKey] = useState<string>("");
    const [secretKey, setSecretKey] = useState<string>("");
    const [exchange, setExchange] = useState<"bybit" | "binance">("bybit");

    const getToken = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    };

    const getId = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('id');
        }
        return null;
    }

    // Получение данных пользователя
    const fetchUserData = async (): Promise<void> => {
        const token = getToken();
        const id = getId();

        if (!token || !id) {
            setError("Токен или ID не найдены");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`${USER_INFO}/${id}/info`, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
            });

            if (res.ok) {
                const data: UserData = await res.json();
                setUserData(data);
            } else {
                const errorData = await res.json();
                setError(errorData.error || "Ошибка загрузки данных");
            }
        } catch (e) {
            setError("Ошибка соединения с сервером");
            console.error("Ошибка при запросе:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    // Метод для добавления ключа
    const handleAddKey = async (): Promise<void> => {
        const token = getToken();

        if (!token) {
            alert("Токен не найден. Пожалуйста, войдите в систему.");
            return;
        }

        if (!publicKey.trim() || !secretKey.trim()) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        setLoading(true);

        try {
            const endpoint = exchange === "bybit"
                ? `http://localhost:8000/api/admin-accounts/user/add-bybit-key/`
                : `http://localhost:8000/api/admin-accounts/user/add-binance-key/`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify({
                    public: publicKey,
                    secret: secretKey
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Ключ успешно добавлен:", data);

                // Обновляем данные пользователя
                await fetchUserData();

                // Сбрасываем форму и показываем успех
                setIsModalBybitOpen(false);
                setIsSuccessModal(true);
                setPublicKey("");
                setSecretKey("");
            } else {
                const errorData = await response.json();
                alert(`Ошибка: ${errorData.error || "Не удалось добавить ключ"}`);
            }

        } catch (e) {
            console.error("Ошибка соединения:", e);
            alert("Ошибка соединения с сервером");
        } finally {
            setLoading(false);
        }
    };

    const ApiKeyItem = ({ keyData, type }: { keyData: ApiKey, type: string }) => (
        <>

            <div className="balance">
                <div className="balance_left_part">
                    <p className="balance_left_part_title">
                        Баланс:
                    </p>
                    <p className="balance_left_part_count">
                        100 USDT
                    </p>
                    {
                        type === "Bybit" ?
                                <div className="bybit">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="5" fill="black"/>
                                        <rect x="2" y="8" width="20" height="7" fill="url(#pattern0_2423_433)"/>
                                        <defs>
                                            <pattern id="pattern0_2423_433" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use href="#image0_2423_433" transform="scale(0.005 0.0142857)"/>
                                            </pattern>
                                            <image id="image0_2423_433" width="200" height="70" preserveAspectRatio="none" href="data:image/png;base64,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"/>
                                        </defs>
                                    </svg>
                                    <p>Bybit</p>
                                </div>
                            :

                            type === "Binance" ?
                                <div className="binance">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" rx="5" fill="black"/>
                                        <path d="M18.1077 8.13352C18.0997 8.02417 18.0224 7.98117 17.9671 7.92527C16.0311 5.98524 14.092 4.04767 12.1603 2.10334C12.0117 1.95406 11.9355 1.97494 11.7998 2.11194C9.87425 4.04828 7.94437 5.98032 6.01019 7.90807C5.86897 8.04875 5.8659 8.12615 6.01019 8.26744C6.63773 8.88361 7.26035 9.5053 7.86762 10.1411C8.04446 10.326 8.13349 10.2867 8.29191 10.127C9.4432 8.96409 10.608 7.81469 11.7568 6.64932C11.9374 6.46625 12.0338 6.46932 12.2125 6.65055C13.3687 7.82268 14.5396 8.98067 15.6989 10.1497C15.8389 10.291 15.9193 10.3322 16.0808 10.1657C16.6942 9.53602 17.3254 8.92293 17.9493 8.30308C18.0064 8.24594 18.0598 8.18513 18.1077 8.13352Z" fill="#F1BC0E"/>
                                        <path d="M11.9539 22C12.0749 21.9951 12.1259 21.9103 12.1891 21.847C14.1098 19.934 16.0274 18.0186 17.9524 16.1099C18.1077 15.9557 18.1022 15.8709 17.9505 15.7229C17.3285 15.1153 16.7133 14.501 16.1084 13.8762C15.9439 13.706 15.853 13.7024 15.6811 13.8774C14.5408 15.0373 13.3816 16.1781 12.2438 17.3404C12.0313 17.5572 11.9208 17.5419 11.7175 17.3342C10.5804 16.1719 9.42724 15.0244 8.28086 13.8713C8.17033 13.7601 8.09726 13.6514 7.92472 13.8301C7.2935 14.4862 6.64632 15.1264 5.99669 15.764C5.86713 15.8912 5.88371 15.9631 6.00221 16.081C7.937 18.0088 9.86811 19.9402 11.8004 21.8698C11.8502 21.9195 11.9079 21.9607 11.9539 21.9994V22Z" fill="#F1BC0E"/>
                                        <path d="M22 11.9847C21.9761 11.9558 21.9484 11.9141 21.9134 11.879C21.2527 11.2113 20.5896 10.546 19.9326 9.8739C19.8178 9.75656 19.7539 9.80571 19.6624 9.89786C19.0152 10.5509 18.3674 11.2027 17.7123 11.8471C17.5882 11.9693 17.5889 12.0412 17.7123 12.1629C18.3533 12.7925 18.9901 13.4271 19.6188 14.0691C19.7502 14.203 19.8282 14.2061 19.9614 14.0716C20.5933 13.4327 21.2349 12.8036 21.8723 12.1696C21.9214 12.1205 21.9871 12.0818 21.9988 11.9841L22 11.9847Z" fill="#F1BC0E"/>
                                        <path d="M4.14847 14.2006C4.24426 14.1938 4.28724 14.1311 4.33636 14.082C4.98048 13.4407 5.61967 12.7944 6.2687 12.1579C6.40133 12.0277 6.3694 11.9521 6.25458 11.8385C5.60801 11.1996 4.96512 10.557 4.32838 9.9083C4.20619 9.78359 4.13496 9.78421 4.01216 9.91014C3.38401 10.5527 2.74911 11.1892 2.10807 11.8188C1.965 11.9595 1.96316 12.048 2.10746 12.1893C2.74236 12.811 3.36743 13.4425 3.99681 14.0697C4.04654 14.1195 4.10303 14.1613 4.14847 14.2V14.2006Z" fill="#F1BC0E"/>
                                        <path d="M12.0117 14.2012C12.0491 14.1705 12.0995 14.1361 12.1418 14.0937C12.7866 13.4511 13.4276 12.8042 14.0766 12.1659C14.2056 12.0394 14.1878 11.9595 14.0686 11.8428C13.419 11.2051 12.7731 10.5638 12.132 9.91751C12.0178 9.80264 11.9472 9.80632 11.8354 9.91936C11.1962 10.5675 10.5527 11.2113 9.90618 11.852C9.79934 11.9583 9.77539 12.0296 9.89574 12.1487C10.5423 12.7895 11.1809 13.4382 11.8232 14.0832C11.8723 14.1324 11.9147 14.1963 12.0123 14.2012H12.0117Z" fill="#F1BC0E"/>
                                    </svg>
                                    <p>Binance</p>
                                </div>
                             :
                                <>
                                    <button className="button_demo_account">
                                        {type}
                                    </button>
                                </>

                    }

                </div>
                <div className="balance_right_part">
                    <div className="button_delete_demo">
                        <button className="delete_demo_account">
                            Вывести
                        </button>
                        <button className="replenish_demo_account">
                            Пополнить
                        </button>
                    </div>
                    <div className="demo_number">
                        <p className="account_number_title">
                            Номер счета для подключения к моделям:
                        </p>
                        <p className="account_number">
                            {keyData.id}
                        </p>
                    </div>
                </div>
            </div>
        </>


    );

    // Компонент для отображения сессии
    const SessionItem = ({ session, type }: { session: Session, type: 'active' | 'completed' }) => (
        <div className="session-item">
            <div className="session-header">
                <h5>{session.name || `Сессия ${session.id}`}</h5>
                <span className={`session-status ${type}`}>
                    {type === 'active' ? 'Активная' : 'Завершенная'}
                </span>
            </div>
            <div className="session-details">
                <p>ID: {session.id}</p>
                {session.start_time && <p>Начало: {new Date(session.start_time).toLocaleString()}</p>}
                {session.end_time && <p>Конец: {new Date(session.end_time).toLocaleString()}</p>}
                {session.description && <p>{session.description}</p>}
            </div>
        </div>
    );

    // Отображение данных пользователя
    const renderUserInfo = () => {
        if (loading) return <div className="loading">Загрузка...</div>;
        if (error) return <div className="error">{error}</div>;
        if (!userData) return <div className="no-data">Нет данных</div>;

        return (
            <div className="user-info-container">

                <div className="keys-section">
                    {userData.bybit_keys.length > 0 ? (
                        <div className="keys-list">
                            {userData.bybit_keys.map((key) => (
                                <ApiKeyItem key={key.id} keyData={key} type="Bybit" />
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>


                {/* API ключи Binance */}
                <div className="keys-section">
                    {userData.binance_keys.length > 0 ? (
                        <div className="keys-list">
                            {userData.binance_keys.map((key) => (
                                <ApiKeyItem key={key.id} keyData={key} type="Binance" />
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

            </div>
        );
    };

    return(
        <>
            <div className="container_accounts">
                <p className="accounts_title">
                    Счета
                </p>
                <div className="accounts_head">
                    <div className="accounts">
                        {renderUserInfo()}

                        <div className="balance">
                        <div className="balance_left_part">
                            <p className="balance_left_part_title">
                                Баланс:
                            </p>
                            <p className="balance_left_part_count">
                                37,29 USDT
                            </p>
                            <button className="button_demo_account">
                                демо-счёт
                            </button>
                        </div>
                        <div className="balance_right_part">
                            <div className="button_delete_demo">
                                <button className="delete_demo_account">
                                    Удалить демо-счёт
                                </button>
                            </div>
                            <div className="demo_number">
                                <p className="account_number_title">
                                    Номер счета для подключения к моделям:
                                </p>
                                <p className="account_number">
                                    5254
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="demo_account_buttons">
                        <button className="button_add_account" onClick={() => setIsModalBybitOpen(true)}>
                            <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                            Добавить свой счёт
                        </button>
                        <button className="button_connect_bybit" onClick={() => {
                            setExchange("bybit");
                            setIsModalBybitOpen(true);
                        }}>
                            <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                            Подключить счёт Bybit
                        </button>
                        <button className="button_connect_binance" onClick={() => {
                            setExchange("binance");
                            setIsModalBybitOpen(true);
                        }}>
                            <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                            Подключить счёт Binance
                        </button>
                    </div>
                </div>

            </div>

            {isModalBybitOpen && (
                <div className="modal_overlay">
                    <div className="modal_window">
                        <h3>Добавить счёт {exchange === "bybit" ? "Bybit" : "Binance"}</h3>
                        <div className="modal_window-block">
                            <div className="">
                            <label>Public key</label>
                            <input
                                type="text"
                                value={publicKey}
                                onChange={(e) => setPublicKey(e.target.value)}
                                placeholder="**** **** **** ****"
                            />
                            </div>
                            <div className="">
                            <label>Secret key</label>
                            <input
                                type="text"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="**** **** **** ****"
                            />
                            </div>


                        <div className="exchange_radio">
                            <p>Биржа</p>
                            <div className="">
                            <label>
                                <input
                                    type="radio"
                                    name="exchange"
                                    checked={exchange === "bybit"}
                                    onChange={() => setExchange("bybit")}
                                />
                                Bybit
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="exchange"
                                    checked={exchange === "binance"}
                                    onChange={() => setExchange("binance")}
                                />
                                Binance
                            </label>
                            </div>
                        </div>
                        </div>

                        <button
                            className="button_confirm"
                            onClick={handleAddKey}
                            disabled={loading}
                        >
                            {loading ? "Отправка..." : "Добавить"}
                        </button>

                        <button
                            className="button_close"
                            onClick={() => {
                                setIsModalBybitOpen(false);
                                setPublicKey("");
                                setSecretKey("");
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M12.293 0.292969C12.6835 -0.0975498 13.3165 -0.0975384 13.707 0.292969C14.0975 0.683499 14.0975 1.31653 13.707 1.70703L8.41406 7L13.707 12.293C14.0974 12.6835 14.0975 13.3165 13.707 13.707C13.3165 14.0975 12.6835 14.0974 12.293 13.707L7 8.41406L1.70703 13.707C1.31653 14.0975 0.683499 14.0975 0.292969 13.707C-0.0975384 13.3165 -0.0975498 12.6835 0.292969 12.293L5.58594 7L0.292969 1.70703C-0.0975555 1.31651 -0.0975555 0.683493 0.292969 0.292969C0.683493 -0.0975555 1.31651 -0.0975555 1.70703 0.292969L7 5.58594L12.293 0.292969Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {isSuccessModal && (
                <div className="modal_overlay">
                    <div className="modal_window">
                        <h3>Ваш счёт добавлен</h3>
                        <button
                            className="button_confirm"
                            onClick={() => setIsSuccessModal(false)}
                        >
                            Ок
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                
            `}</style>
        </>
    )
}