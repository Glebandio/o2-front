import {HeaderLk} from "@/components/header/headerLk";
import Link from "next/link";
import Image from "next/image";


export default function ModelDetailed(){
    return (
        <>
            <HeaderLk/>
            <main className="models_detailed_main">
                <div className="models_detailed_left_part">
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
                <div className="models_detailed_right_part">
                    <div className="bread_crumbs">
                        <p>
                            Модели
                        </p>
                        <p>

                        </p>
                        <p>
                            1446_00VIT_MT_9_volsic1filter(MT1filtered)_BYBIT
                        </p>
                    </div>
                    <div className="dropdown_models">
                        <p>
                            1425_00VIT_MT_1_NULL_BYBIT
                        </p>
                        <img src="../../static/img/dropdown_arrow.png" alt=""/>
                    </div>
                    <div className="filters">
                        <div className="filters_data">
                            <p className="filters_data_title">
                                Даты
                            </p>
                            <div className="filters_data_period_div">
                                <p className="filters_data_period">
                                    20.04.2023–26.04.2023
                                </p>
                                <button className="filters_data_cross">
                                    <img src="../../static/img/filters_cross.png" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="filters_deposit">
                            <p className="filters_deposit_title">
                                Депозит
                            </p>
                            <div className="filters_deposit_data_div">
                                <p className="filters_deposit_data">
                                    500
                                </p>
                            </div>
                        </div>
                        <div className="filters_volume">
                            <p className="filters_volume_title">
                                Единичный объём
                            </p>
                            <div className="filters_volume_data_div">
                                <p className="filters_volume_data">
                                    10
                                </p>
                            </div>
                        </div>
                        <button className="filters_apply">
                            Применить
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}