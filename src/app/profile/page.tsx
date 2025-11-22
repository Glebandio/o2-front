'use client'
import {HeaderLk} from "@/components/header/headerLk";
import Image from "next/image";
import Link from "next/link";


export default function ProfilePage() {
    return (
        <>
            <HeaderLk/>
            <main className="profile_main">
                <div className="profile_left_part">
                    <div className="profile_left_part_main">
                        <div className="profile_menu_div">
                            <Link className="profile_menu_models" href="/models">
                                <Image height={16} width={16} src="/images/menu_models.png" alt=""/>
                                <p>Модели</p>
                            </Link>
                            <Link className="profile_menu_sessions" href="/sessions">
                                <Image height={16} width={16} src="/images/menu_sessions.png" alt=""/>
                                <p>Сессии</p>
                            </Link>
                            <Link className="profile_menu_accounts" href="/demo">
                                <Image height={16} width={16} src="/images/menu_accounts.png" alt=""/>
                                <p>Счета</p>
                            </Link>
                        </div>
                        <div className="profile_service_payment">
                            <div className="profile_service_payment_text">
                                <p className="profile_service_payment_text_title">
                                    Сервисный платёж
                                </p>
                                <p className="profile_service_payment_text_description">
                                    Оплата за использование платформы
                                    только при получении дохода свыше
                                    500 $ в месяц. Оплатите в течении
                                    3 дней.
                                </p>
                            </div>
                            <button className="profile_service_payment_button">
                                Оплатить
                            </button>
                        </div>
                    </div>
                    <div className="support_div">
                        <a className="support" href="">
                            <p className="support_title">
                                Поддержка
                            </p>
                            <div className="support_tg_div">
                                <img className="support_tg_img" src="../../static/img/tg.png" alt=""/>
                                <p className="support_tg">
                                    @support
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="profile_right_part">
                    <p className="profile_right_part_title">
                        Профиль
                    </p>
                    <div className="profile_right_part_password_change">
                        <div className="password_change_div">
                            <p className="password_change_title">
                                Логин
                            </p>
                            <input className="password_change" type="text" value="scksdgrl@gmail.com"/>
                        </div>
                        <div className="password_change_div">
                            <p className="password_change_title">
                                Пароль
                            </p>
                            <input className="password_change" type="password" value="**********************"/>
                            <button className="button_change_password">
                                Сменить пароль
                            </button>
                        </div>
                    </div>
                    <div className="profile_right_part_tutorial">
                        <div className="tutorial_cards_head">
                            <p className="tutorial_cards_head_title">
                                С чего начать
                            </p>
                            <button className="button_hide">
                                Скрыть туториал
                            </button>
                        </div>
                        <div className="tutorial_cards">
                            <div className="tutorial_card">
                                <div className="tutorial_card_main">
                                    <div className="tutorial_card_title_div">
                                        <p className="tutorial_card_title">
                                            Пройти верификацию
                                        </p>
                                        <input className="tutorial_card_checkbox" type="checkbox"/>
                                    </div>
                                    <p className="tutorial_card_description">
                                        Для пополнения счета и вывода
                                        средств необходимо пройти верификацию
                                    </p>
                                </div>
                                <button className="verification_completed">
                                    Верификация пройдена
                                </button>
                            </div>
                            <div className="tutorial_card">
                                <div className="tutorial_card_main">
                                    <div className="tutorial_card_title_div">
                                        <p className="tutorial_card_title">
                                            Подключите 2FA
                                        </p>
                                        <input className="tutorial_card_checkbox" type="checkbox"/>
                                    </div>
                                    <p className="tutorial_card_description">
                                        Усиленная защита аккаунта и активов
                                    </p>
                                </div>
                                <button className="verification_pass">
                                    Пройти верификацию
                                </button>
                            </div>
                            <div className="tutorial_card">
                                <div className="tutorial_card_main">
                                    <div className="tutorial_card_title_div">
                                        <p className="tutorial_card_title">
                                            Подключить демо-счёт
                                        </p>
                                        <input className="tutorial_card_checkbox" type="checkbox"/>
                                    </div>
                                    <p className="tutorial_card_description">
                                        Выбери модель и подключи к ней демо-счёт
                                    </p>
                                </div>
                                <button className="connect_demo_account">
                                    Подключить демо-счёт
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="profile_right_part_service_payment">
                        <p className="profile_right_part_service_payment_title">
                            Сервисный платёж
                        </p>
                        <div className="service_payment_data_div">
                            <div className="service_payment_data_head">
                                <p className="service_payment_data_head_date">
                                    Дата
                                </p>
                                <p className="service_payment_data_head_sum">
                                    Сумма
                                </p>
                                <p className="service_payment_data_head_details">
                                    Реквезит для оплаты
                                </p>
                                <p className="service_payment_data_head_status">
                                    Статус
                                </p>
                            </div>
                            <div className="service_payment_data">
                                <p className="service_payment_data_date">
                                    12.09.2025
                                </p>
                                <p className="service_payment_data_sum">
                                    4,34 USDT
                                </p>
                                <div className="copy_payment_details">
                                    <p className="service_payment_data_payment_details">
                                        × e3b0f7b2a1a98c5dF9E7d84e0F9cE23D8b1A9f2
                                    </p>
                                    <img src="../../static/img/Copy.png" alt=""/>
                                </div>
                                <p className="service_payment_data_status_not_paid">
                                    Не оплачен
                                </p>
                            </div>
                            <div className="service_payment_data">
                                <p className="service_payment_data_date">
                                    12.09.2025
                                </p>
                                <p className="service_payment_data_sum">
                                    7,46 USDT
                                </p>
                                <div className="copy_payment_details">
                                    <p className="service_payment_data_payment_details">
                                        × e3b0f7b2a1a98c5dF9E7d84e0F9cE23D8b1A9f2
                                    </p>
                                    <img src="../../static/img/Copy.png" alt=""/>
                                </div>
                                <p className="service_payment_data_status_paid">
                                    Оплачен
                                </p>
                            </div>
                            <p className="">
                                <p className="bold_font">
                                    Важно:
                                </p>
                                если сервисный платёж не будет
                                внесён в течение 3 дней, доступ ко всем
                                сессиям автоматически приостанавится.
                            </p>
                            <p>
                                <p className="bold_font">
                                    После оплаты прикрепите скрин или укажите
                                    хэш транзакции в Telegram-чат поддержки
                                    <a href="">
                                        @O2TradingSupport1.
                                    </a>
                                </p>
                                Мы проверим и изменим статус
                                на «Оплачен».
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}