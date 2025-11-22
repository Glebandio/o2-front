'use client'
import {HeaderLk} from "@/components/header/headerLk";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";


export default function DemoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);

    const [publicKey, setPublicKey] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [exchange, setExchange] = useState("bybit");
    const [loading, setLoading] = useState(false);

    const handleAddAccount = async () => {
        const email = localStorage.getItem("email");
        if (!email) {
            alert("Email не найден в localStorage");
            return;
        }

        setLoading(true);

        const body = {
            email: email,
            two_factor_auth: true,
            keys: {
                // exchange: exchange,
                public_key: publicKey,
                secret_key: secretKey
            }
        };

        try {
            const res = await fetch("http://127.0.0.1:8000/api/accounts/users/", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                setIsModalOpen(false);
                setIsSuccessModal(true);
            } else {
                setIsModalOpen(false);
                setIsSuccessModal(true);
                //const err = await res.json();
                //alert(err.detail || "Ошибка добавления счёта");
            }

        } catch (e) {
            console.error(e);
            alert("Ошибка соединения с сервером");
        }

        setLoading(false);
    };

    return (
        <>
            <HeaderLk/>
            <main className="demo_account">
                <div className="demo_account_left_part">
                    <div className="demo_menu">
                        <Link className="menu_models" href="/models">
                            <Image width={16} height={16} src="/images/menu_models.png" alt=""/>
                            <p>Модели</p>
                        </Link>
                        <Link className="menu_sessions" href="/sessions">
                            <Image width={16} height={16} src="/images/menu_sessions.png" alt=""/>
                            <p>Сессии</p>
                        </Link>
                        <Link className="menu_accounts" href="/demo">
                            <Image width={16} height={16} src="/images/menu_accounts.png" alt=""/>
                            <p>Счета</p>
                        </Link>
                    </div>
                    <div className="support_div">
                        <a className="support" href="">
                            <p className="support_title">
                                Поддержка
                            </p>
                            <div className="support_tg_div">
                                <Image width={16} height={16} className="support_tg_img" src="/images/tg.png" alt=""/>
                                <p className="support_tg">
                                    @support
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="container_accounts">
                    <p className="accounts_title">
                        Счета
                    </p>
                    <div className="accounts_head">
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
                        <div className="demo_account_buttons">
                            <button className="button_add_account" onClick={() => setIsModalOpen(true)}>
                                <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                                Добавить свой счёт
                            </button>
                            <button className="button_connect_bybit">
                                <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                                Подключить счёт Bybit
                            </button>
                            <button className="button_connect_binance">
                                <Image width={10} height={10} src="/images/demo_plus.png" alt=""/>
                                Подключить счёт Binance
                            </button>
                        </div>
                    </div>
                    <div className="transfers">
                        <p className="transfers_story">
                            История переводов
                        </p>
                        <div className="drop_downs">
                            <button className="button_month">
                                Август
                                <Image width={10} height={5} src="/images/white_arrow.png" alt=""/>
                            </button>
                            <button className="button_demo">
                                Счёт
                                <Image width={10} height={5} src="/images/black_aroww.png" alt=""/>
                            </button>
                            <button className="button_transfers">
                                Все переводы
                                <Image width={10} height={5} src="/images/black_aroww.png" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="operation_div">
                        <p className="operation">
                            Операций пока нет
                        </p>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="modal_overlay">
                        <div className="modal_window">
                            <h3 >Добавить счёт</h3>

                            <label>Public key:</label>
                            <input
                                type="text"
                                value={publicKey}
                                onChange={(e) => setPublicKey(e.target.value)}
                                placeholder="Введите Public key"
                            />

                            <label>Secret key:</label>
                            <input
                                type="text"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="Введите Secret key"
                            />

                            <div className="exchange_radio">
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

                            <button
                                className="button_confirm"
                                onClick={handleAddAccount}
                                disabled={loading}
                            >
                                {loading ? "Отправка..." : "Добавить"}
                            </button>

                            <button
                                className="button_close"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M12.293 0.292969C12.6835 -0.0975498 13.3165 -0.0975384 13.707 0.292969C14.0975 0.683499 14.0975 1.31653 13.707 1.70703L8.41406 7L13.707 12.293C14.0974 12.6835 14.0975 13.3165 13.707 13.707C13.3165 14.0975 12.6835 14.0974 12.293 13.707L7 8.41406L1.70703 13.707C1.31653 14.0975 0.683499 14.0975 0.292969 13.707C-0.0975384 13.3165 -0.0975498 12.6835 0.292969 12.293L5.58594 7L0.292969 1.70703C-0.0975555 1.31651 -0.0975555 0.683493 0.292969 0.292969C0.683493 -0.0975555 1.31651 -0.0975555 1.70703 0.292969L7 5.58594L12.293 0.292969Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* ===================== МОДАЛКА УСПЕХА ===================== */}
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
            </main>
            <style jsx>{`
                .modal_overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0,0,0,0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                
                h3{
                    width: 100%;
                    text-align: center;
                }

                .modal_window {
                    position: relative;
                    background: white;
                    padding: 1.375rem;
                    border-radius: 0.5rem;
                    width: 29rem;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                }

                .button_confirm {
                    padding: 10px;
                    background: #2f80ed;
                    color: white;
                    border-radius: 6px;
                }

                .button_close {
                    position: absolute;
                    top: -2.5rem;
                    right: -2.5rem;
                    padding: 0.3rem;
                    width: 2rem;
                    height: 2rem;
                    background: #fff;
                    border-radius: 500px;
                }

                .exchange_radio {
                    display: flex;
                    gap: 15px;
                    margin-top: 10px;
                }
            `}</style>
        </>
    )
}