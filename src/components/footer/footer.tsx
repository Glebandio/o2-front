import Image from "next/image";


export const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div className="footer_left">
                    <p>Хочешь в команду O2 Trading? </p>
                    <span>Если тебе близка наша идея и ты хочешь быть частью команды — напиши нам. Мы всегда открыты к талантам.</span>
                    <button>написать</button>
                </div>
                <div className="footer_right">
                    <p>Для обратной связи, партнёрств или нестандартных вопросов — можно написать напрямую основателю tg: <b>@olegtsin</b></p>
                    <div className="footer_right-row">
                        <a href="">Главная </a>
                        <a href="">Калькулятор</a>
                        <a href="">Таблица</a>
                        <a href="">FAQ</a>
                        <a href="">Лицензия</a>
                        <a href="">Политика конфиденциальности </a>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>O₂ Trading 2025, все права защищены</p>
            </div>
        </footer>
    )
}