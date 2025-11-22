import {HeaderLk} from "@/components/header/headerLk";


export default function CreatingPage() {
    return (
        <>
            <HeaderLk/>
            <main className="account">
                <div className="container_account">
                    <p className="account_title">Создаём аккаунт</p>
                    <img className="arrows" src="../../static/img/account_arrows.svg" alt=""/>
                    <p className="account_subtitle_1">
                        Процесс может занять 2–3 минуты.
                        Это время требуется для создания настроек кредитных плечей.
                        Никуда не уходите, все будет готово.
                    </p>
                    <div className="account_created">
                        <img className="setting" src="../../static/img/account_setting.png" alt=""/>
                        <p className="account_vataga_binance">
                            Аккаунт Vataga | Binance Link создаётся
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}