'use client'
import Image from "next/image";
import {IMenuProps} from "@/interfaces/menu";


export const Menu = ({page, setPage}: IMenuProps ) => {




    return (
        <>
            <div className="menu_lk">
                <div className="menu_block">
                    <button className={`menu_item ${ page === 0 ? 'active' : ''}`} onClick={()=> setPage(0)}>
                        <Image width={16} height={16} src="/images/menu_models.png" alt=""/>
                        <p>Модели</p>
                    </button>
                    <button className={`menu_item ${ page === 1 ? 'active' : ''}`} onClick={()=> setPage(1)}>
                        <Image width={16} height={16} src="/images/menu_sessions.png" alt=""/>
                        <p>Сессии</p>
                    </button>
                    <button className={`menu_item ${ page === 2 ? 'active' : ''}`} onClick={()=> setPage(2)}>
                        <Image width={16} height={16} src="/images/menu_accounts.png" alt=""/>
                        <p>Счета</p>
                    </button>
                </div>
                <div className="support_div">
                    <a className="support" href="">
                        <p className="support_title">
                            Поддержка
                        </p>
                        <div className="support_tg_div">
                            <Image width={10} height={10} className="support_tg_img" src="/images/tg.png" alt=""/>
                            <p className="support_tg">
                                @support
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}