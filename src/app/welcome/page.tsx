import {HeaderLk} from "@/components/header/headerLk";
import Image from "next/image";
import Link from "next/link";
import {HeaderAuth} from "@/components/header/headerAuth";


export default function WelcomePage() {
    return (
        <>
            <HeaderAuth/>
            <main className="welcome">
                <div className="container_welcome">
                    <h1>Добро пожаловать на O2 Traiding</h1>
                    <div className="boxes">
                        <div className="box_1">
                            <div className="box_baybit">
                                <Image width={800} height={200} className="baybit" src="/images/baybit.png" alt=""/>
                            </div>
                            <div className="box_binance">
                                <Image width={800} height={200} className="binance" src="/images/binance.png" alt=""/>
                            </div>
                            <div className="left_part">
                                <Image width={1000} height={1000} className="welcome_1" src="/images/welcome1.png" alt=""/>
                            </div>
                            <div className="right_part">
                                <p className="box_title">Создайте счёт и подключите торговую модель</p>
                                <p className="box_subtitle">Или подключите торговые модели к Вашему уже существующему
                                    счёту</p>
                                <Link href={'/demo'} className="connect">
                                    Подключить счёт
                                </Link>
                                <Link href={'/demo'} className="add">
                                    Добавить счёт
                                </Link>
                            </div>
                        </div>
                        <div className="box_2">
                            <div className="box_demo">
                                <Image width={1000} height={1000} className="box_demo" src="/images/demo_mob.png" alt=""/>
                            </div>
                            <div className="left_part_2">
                                <Image width={1000} height={1000} className="chart" src="/images/Rectangle%2034626138.png" alt=""/>
                            </div>
                            <div className="right_part_2">
                                <p className="box_title_2">Изучите сервис и модели
                                    на демо-счёте</p>
                                <p className="box_subtitle_2">Баланс демо-счёта 100 USDT, можно подключить к модели, но
                                    нельзя вывести</p>
                                <Link href={'/account'} className="add_demo">
                                    Подключить демо-счёт

                                </Link>
                            </div>
                        </div>
                    </div>

                </div>


            </main>
        </>
    )
}