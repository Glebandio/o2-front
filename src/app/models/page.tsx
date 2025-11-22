'use client'
import {HeaderLk} from "@/components/header/headerLk";
import Image from "next/image";
import Link from "next/link";


export default function ModelsPage() {
    return (
        <>
            <HeaderLk/>
            <main className="models_main">
                <div className="models_left_part">
                    <div className="models_menu_div">
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
                                <img className="support_tg_img" src="../../static/img/tg.png" alt=""/>
                                <p className="support_tg">
                                    @support
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="models_right_part">
                    <p className="models_title">
                        Модели
                    </p>
                    <div className="container_models_div">
                        <div className="container_models">
                            <div className="container_models_card">
                                <div className="container_models_top">
                                    <p className="container_models_top_title">
                                        Модель
                                    </p>
                                    <p className="container_models_top_name">
                                        1446_00VIT_MT_9_volsic1filter(MT1fi<br/>ltered)_BYBIT
                                    </p>
                                </div>
                                <div className="container_models_bottom">
                                    <div className="container_models_bottom_percent">
                                        <div className="percent_div_left_part">
                                            <p className="percent_left_part_title">
                                                Прибыльных сделок
                                            </p>
                                            <p className="percent_left_part_profit">
                                                94,6%
                                            </p>
                                        </div>
                                        <div className="percent_div_right_part">
                                            <p className="percent_right_part_title">
                                                Умность
                                            </p>
                                            <p className="percent_right_part_profit">
                                                74,6%
                                            </p>
                                        </div>
                                    </div>
                                    <Image width={300} height={300} className="chart" src="/images/chart.png" alt=""/>
                                    <div className="data_chart_div">
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL на сделку (ед. %)
                                            </p>
                                            <p className="data_chart">
                                                0.92
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                Время в сделке
                                            </p>
                                            <p className="data_chart">
                                                30 сек
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL в день (в ед.%)
                                            </p>
                                            <p className="data_chart">
                                                21.33%
                                            </p>
                                        </div>
                                        <div className="data_chart_element_not_border">
                                            <p className="data_chart_name_not_border">
                                                Дней с просадкой
                                            </p>
                                            <p className="data_chart_not_border">
                                                17.13
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container_models_buttons">
                                        <button className="models_button_connect">
                                            Подключить
                                        </button>
                                        <button className="models_button_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container_models">
                            <div className="container_models_card">
                                <div className="container_models_top">
                                    <p className="container_models_top_title">
                                        Модель
                                    </p>
                                    <p className="container_models_top_name">
                                        1446_00VIT_MT_9_volsic1filter(MT1fi<br/>ltered)_BYBIT
                                    </p>
                                </div>
                                <div className="container_models_bottom">
                                    <div className="container_models_bottom_percent">
                                        <div className="percent_div_left_part">
                                            <p className="percent_left_part_title">
                                                Прибыльных сделок
                                            </p>
                                            <p className="percent_left_part_profit">
                                                94,6%
                                            </p>
                                        </div>
                                        <div className="percent_div_right_part">
                                            <p className="percent_right_part_title">
                                                Умность
                                            </p>
                                            <p className="percent_right_part_profit">
                                                74,6%
                                            </p>
                                        </div>
                                    </div>
                                    <Image width={300} height={300} className="chart" src="/images/chart.png" alt=""/>
                                    <div className="data_chart_div">
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL на сделку (ед. %)
                                            </p>
                                            <p className="data_chart">
                                                0.92
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                Время в сделке
                                            </p>
                                            <p className="data_chart">
                                                30 сек
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL в день (в ед.%)
                                            </p>
                                            <p className="data_chart">
                                                21.33%
                                            </p>
                                        </div>
                                        <div className="data_chart_element_not_border">
                                            <p className="data_chart_name_not_border">
                                                Дней с просадкой
                                            </p>
                                            <p className="data_chart_not_border">
                                                17.13
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container_models_buttons">
                                        <button className="models_button_connect">
                                            Подключить
                                        </button>
                                        <button className="models_button_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container_models">
                            <div className="container_models_card">
                                <div className="container_models_top">
                                    <p className="container_models_top_title">
                                        Модель
                                    </p>
                                    <p className="container_models_top_name">
                                        1446_00VIT_MT_9_volsic1filter(MT1fi<br/>ltered)_BYBIT
                                    </p>
                                </div>
                                <div className="container_models_bottom">
                                    <div className="container_models_bottom_percent">
                                        <div className="percent_div_left_part">
                                            <p className="percent_left_part_title">
                                                Прибыльных сделок
                                            </p>
                                            <p className="percent_left_part_profit">
                                                94,6%
                                            </p>
                                        </div>
                                        <div className="percent_div_right_part">
                                            <p className="percent_right_part_title">
                                                Умность
                                            </p>
                                            <p className="percent_right_part_profit">
                                                74,6%
                                            </p>
                                        </div>
                                    </div>
                                    <Image width={300} height={300} className="chart" src="/images/chart.png" alt=""/>
                                    <div className="data_chart_div">
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL на сделку (ед. %)
                                            </p>
                                            <p className="data_chart">
                                                0.92
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                Время в сделке
                                            </p>
                                            <p className="data_chart">
                                                30 сек
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL в день (в ед.%)
                                            </p>
                                            <p className="data_chart">
                                                21.33%
                                            </p>
                                        </div>
                                        <div className="data_chart_element_not_border">
                                            <p className="data_chart_name_not_border">
                                                Дней с просадкой
                                            </p>
                                            <p className="data_chart_not_border">
                                                17.13
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container_models_buttons">
                                        <button className="models_button_connect">
                                            Подключить
                                        </button>
                                        <button className="models_button_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container_models">
                            <div className="container_models_card">
                                <div className="container_models_top">
                                    <p className="container_models_top_title">
                                        Модель
                                    </p>
                                    <p className="container_models_top_name">
                                        1446_00VIT_MT_9_volsic1filter(MT1fi<br/>ltered)_BYBIT
                                    </p>
                                </div>
                                <div className="container_models_bottom">
                                    <div className="container_models_bottom_percent">
                                        <div className="percent_div_left_part">
                                            <p className="percent_left_part_title">
                                                Прибыльных сделок
                                            </p>
                                            <p className="percent_left_part_profit">
                                                94,6%
                                            </p>
                                        </div>
                                        <div className="percent_div_right_part">
                                            <p className="percent_right_part_title">
                                                Умность
                                            </p>
                                            <p className="percent_right_part_profit">
                                                74,6%
                                            </p>
                                        </div>
                                    </div>
                                    <Image width={300} height={300} className="chart" src="/images/chart.png" alt=""/>
                                    <div className="data_chart_div">
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL на сделку (ед. %)
                                            </p>
                                            <p className="data_chart">
                                                0.92
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                Время в сделке
                                            </p>
                                            <p className="data_chart">
                                                30 сек
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL в день (в ед.%)
                                            </p>
                                            <p className="data_chart">
                                                21.33%
                                            </p>
                                        </div>
                                        <div className="data_chart_element_not_border">
                                            <p className="data_chart_name_not_border">
                                                Дней с просадкой
                                            </p>
                                            <p className="data_chart_not_border">
                                                17.13
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container_models_buttons">
                                        <button className="models_button_connect">
                                            Подключить
                                        </button>
                                        <button className="models_button_more">
                                            Подробнее
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container_models">
                            <div className="container_models_card">
                                <div className="container_models_top">
                                    <p className="container_models_top_title">
                                        Модель
                                    </p>
                                    <p className="container_models_top_name">
                                        1446_00VIT_MT_9_volsic1filter(MT1fi<br/>ltered)_BYBIT
                                    </p>
                                </div>
                                <div className="container_models_bottom">
                                    <div className="container_models_bottom_percent">
                                        <div className="percent_div_left_part">
                                            <p className="percent_left_part_title">
                                                Прибыльных сделок
                                            </p>
                                            <p className="percent_left_part_profit">
                                                94,6%
                                            </p>
                                        </div>
                                        <div className="percent_div_right_part">
                                            <p className="percent_right_part_title">
                                                Умность
                                            </p>
                                            <p className="percent_right_part_profit">
                                                74,6%
                                            </p>
                                        </div>
                                    </div>
                                    <Image width={300} height={300} className="chart" src="/images/chart.png" alt=""/>
                                    <div className="data_chart_div">
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL на сделку (ед. %)
                                            </p>
                                            <p className="data_chart">
                                                0.92
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                Время в сделке
                                            </p>
                                            <p className="data_chart">
                                                30 сек
                                            </p>
                                        </div>
                                        <div className="data_chart_element">
                                            <p className="data_chart_name">
                                                PnL в день (в ед.%)
                                            </p>
                                            <p className="data_chart">
                                                21.33%
                                            </p>
                                        </div>
                                        <div className="data_chart_element_not_border">
                                            <p className="data_chart_name_not_border">
                                                Дней с просадкой
                                            </p>
                                            <p className="data_chart_not_border">
                                                17.13
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container_models_buttons">
                                        <button className="models_button_connect">
                                            Подключить
                                        </button>
                                        <button className="models_button_more">
                                            Подробнее
                                        </button>
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