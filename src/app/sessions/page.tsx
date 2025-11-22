import {HeaderLk} from "@/components/header/headerLk";
import Link from "next/link";
import Image from "next/image";


export default function SessionPage() {
    return(
        <>
            <HeaderLk/>
            <main className="sessions_main">
                <div className="sessions_left_part">
                    <div className="sessions_menu">
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
                <div className="sessions_right_part">
                    <div className="profit_chart_div">
                        <div className="profit_chart">
                            <p className="profit_chart_titlle">
                                Общий график прибыли
                            </p>
                            <div className="drop_downs_chart">
                                <button className="drop_downs_month">
                                    Август
                                    <Image width={10} height={5} src="/images/black_aroww.png" alt=""/>
                                </button>
                                <button className="drop_downs_data">
                                    Все время
                                </button>
                            </div>
                        </div>
                        <div className="container_profit_chart">
                            <div className="profit_chart_data">
                                <div className="total_profit">
                                    <p className="total_profit_title">
                                        Общая прибыль
                                    </p>
                                    <p className="total_profit_value">
                                        321,48 USDT
                                    </p>
                                </div>
                                <div className="average_profit_div">
                                    <div className="average_profit">
                                        <p className="average_profit_title">
                                            Средняя прибыль в неделю
                                        </p>
                                        <p className="average_profit_value">
                                            321,48 USDT
                                        </p>
                                    </div>
                                    <div className="average_profit">
                                        <p className="average_profit_title">
                                            Средняя прибыль за сделку
                                        </p>
                                        <p className="average_profit_value">
                                            321,48 USDT
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="chart_sessions">
                            </div>
                        </div>
                    </div>
                    <div className="sessions_div">
                        <p className="sessions_title">
                            Активные сессии
                        </p>
                        <div className="sessions_head">
                            <div className="sessions_head_right_part">
                                <p>
                                    Сессия и модель
                                </p>
                            </div>
                            <div className="sessions_head_left_part">
                                <p>
                                    Прибыль<br/>
                                    (USDT):
                                </p>
                                <p>
                                    Сделки/ время
                                </p>
                                <p>
                                    Win Rate:
                                </p>
                                <p>
                                    Ед. %
                                </p>
                                <p>
                                    Начало
                                    сессии
                                </p>
                            </div>
                        </div>
                        <div className="sessions_list">
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 1
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter(MT1filtered)_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                3 сделок (из 10)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_buttons">
                                        <button className="session_and">
                                            Завершить сессию
                                        </button>
                                        <button className="session_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 2
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                2 ч (из 5)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_buttons">
                                        <button className="session_and">
                                            Завершить сессию
                                        </button>
                                        <button className="session_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 3
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter(MT1filtered)_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                3 сделок (из 10)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_buttons">
                                        <button className="session_and">
                                            Завершить сессию
                                        </button>
                                        <button className="session_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sessions_div">
                        <p className="sessions_title">
                            Завершённые сессии
                        </p>
                        <div className="sessions_head">
                            <div className="sessions_head_right_part">
                                <p>
                                    Сессия и модель
                                </p>
                            </div>
                            <div className="sessions_head_left_part">
                                <p>
                                    Прибыль<br/>
                                    (USDT):
                                </p>
                                <p>
                                    Сделки/ время
                                </p>
                                <p>
                                    Win Rate:
                                </p>
                                <p>
                                    Ед. %
                                </p>
                                <p>
                                    Период работы
                                </p>
                            </div>
                        </div>
                        <div className="sessions_list">
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 1
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter(MT1filtered)_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                3 сделок (из 10)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_completed_div">
                                        <p className="session_completed">
                                            Сессия заверщена
                                        </p>
                                        <p className="session_completed_time">
                                            18.06.25
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 2
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                2 ч (из 5)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_completed_div">
                                        <p className="session_completed">
                                            Сессия заверщена
                                        </p>
                                        <p className="session_completed_time">
                                            18.06.25
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия 3
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            1446_00VIT_MT_9_volsic1fiter(MT1filtered)_BYBIT
                                        </p>
                                        <div className="session_data_element">
                                            <p className="session_profit">
                                                +64.07
                                            </p>
                                            <p className="session_transaction_time">
                                                3 сделок (из 10)
                                            </p>
                                            <p className="session_win_rate">
                                                1,2%
                                            </p>
                                            <p className="session_unit_percent">
                                                8%
                                            </p>
                                            <p className="session_beginning">
                                                25.05.25
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_completed_div">
                                        <p className="session_completed">
                                            Сессия заверщена
                                        </p>
                                        <p className="session_completed_time">
                                            18.06.25
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}