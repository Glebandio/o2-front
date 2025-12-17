import Image from "next/image";
import Link from "next/link";
import { ButtonBlue } from "@/components/Buttons/ButtonBlue";
import {ButtonWhiteOutlined} from "@/components/Buttons/ButtonWhiteOutlined";


export const Header = () => {
    return(
        <header>
            <div className="header">
                <Link className={'header__logo'} href={'/'}>
                    <Image className={'header__logo-image'} width={217} height={22} src={'./images/header_logo/header-logo.svg'} alt={''}/>
                </Link>
                <ul className={'header__list'}>
                    <li className={'header__list-item'}>
                        <Link href={"/"} >Главная</Link>
                    </li>
                    <li className={'header__list-item'}>
                        <Link href={"#"} >
                            Таблица
                        </Link>
                    </li>
                    <li className={'header__list-item'}>
                        <Link href={"#"} >
                            FAQ
                        </Link>
                    </li>
                    <li className={'header__list-item'}>
                        <Link href={"#"} >
                            Контакты
                        </Link>
                    </li>
                </ul>
                <div className="header__buttons">
                    <ButtonWhiteOutlined text={'Зарегистрироваться'}/>
                    <ButtonBlue text={"Войти"} />
                </div>
            </div>
        </header>
    )
}