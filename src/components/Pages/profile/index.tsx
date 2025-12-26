'use client'


import Image from "next/image";

export const Profile = () => {

    return(
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
                {/*<div className="tutorial_cards_head">*/}
                {/*    <p className="tutorial_cards_head_title">*/}
                {/*        С чего начать*/}
                {/*    </p>*/}
                {/*    <button className="button_hide">*/}
                {/*        Скрыть туториал*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div className="tutorial_cards">*/}
                {/*    <div className="tutorial_card">*/}
                {/*        <div className="tutorial_card_main">*/}
                {/*            <div className="tutorial_card_title_div">*/}
                {/*                <p className="tutorial_card_title">*/}
                {/*                    Пройти верификацию*/}
                {/*                </p>*/}
                {/*                <input className="tutorial_card_checkbox" type="checkbox"/>*/}
                {/*            </div>*/}
                {/*            <p className="tutorial_card_description">*/}
                {/*                Для пополнения счета и вывода*/}
                {/*                средств необходимо пройти верификацию*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <button className="verification_completed">*/}
                {/*            Верификация пройдена*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="tutorial_card">*/}
                {/*        <div className="tutorial_card_main">*/}
                {/*            <div className="tutorial_card_title_div">*/}
                {/*                <p className="tutorial_card_title">*/}
                {/*                    Подключите 2FA*/}
                {/*                </p>*/}
                {/*                <input className="tutorial_card_checkbox" type="checkbox"/>*/}
                {/*            </div>*/}
                {/*            <p className="tutorial_card_description">*/}
                {/*                Усиленная защита аккаунта и активов*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <button className="verification_pass">*/}
                {/*            Пройти верификацию*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="tutorial_card">*/}
                {/*        <div className="tutorial_card_main">*/}
                {/*            <div className="tutorial_card_title_div">*/}
                {/*                <p className="tutorial_card_title">*/}
                {/*                    Подключить демо-счёт*/}
                {/*                </p>*/}
                {/*                <input className="tutorial_card_checkbox" type="checkbox"/>*/}
                {/*            </div>*/}
                {/*            <p className="tutorial_card_description">*/}
                {/*                Выбери модель и подключи к ней демо-счёт*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <button className="connect_demo_account">*/}
                {/*            Подключить демо-счёт*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
                    {/*<div className="service_payment_data">*/}
                    {/*    <p className="service_payment_data_date">*/}
                    {/*        12.09.2025*/}
                    {/*    </p>*/}
                    {/*    <p className="service_payment_data_sum">*/}
                    {/*        4,34 USDT*/}
                    {/*    </p>*/}
                    {/*    <div className="copy_payment_details">*/}
                    {/*        <p className="service_payment_data_payment_details">*/}
                    {/*            × e3b0f7b2a1a98c5dF9E7d84e0F9cE23D8b1A9f2*/}
                    {/*        </p>*/}
                    {/*        <Image width={10} height={5} src="/images/Copy.png" alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <p className="service_payment_data_status_not_paid">*/}
                    {/*        Не оплачен*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    {/*<div className="service_payment_data">*/}
                    {/*    <p className="service_payment_data_date">*/}
                    {/*        12.09.2025*/}
                    {/*    </p>*/}
                    {/*    <p className="service_payment_data_sum">*/}
                    {/*        7,46 USDT*/}
                    {/*    </p>*/}
                    {/*    <div className="copy_payment_details">*/}
                    {/*        <p className="service_payment_data_payment_details">*/}
                    {/*            × e3b0f7b2a1a98c5dF9E7d84e0F9cE23D8b1A9f2*/}
                    {/*        </p>*/}
                    {/*        <Image width={10} height={5} src="/images/Copy.png" alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <p className="service_payment_data_status_paid">*/}
                    {/*        Оплачен*/}
                    {/*    </p>*/}
                    {/*</div>*/}
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
    )
}