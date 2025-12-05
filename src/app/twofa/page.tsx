import {HeaderAuth} from "@/components/header/headerAuth";


export default function TwofaPage() {
    return (
        <>
            <HeaderAuth/>
            <main className="fa">
                <div className="container_fa">
                    <p className="title">Вход</p>
                    <p className="subtitle">Введите 6-значный код из вашего приложения для двухфакторной
                        айтентификации</p>
                    <div className="authentification">
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                    <div className="links_fa">
                        <a href="">Назад</a>
                        <a href="">Код не приходит</a>
                    </div>
                    <button className="button_fa">
                        Войти
                    </button>
                </div>
            </main>
        </>
    )
}