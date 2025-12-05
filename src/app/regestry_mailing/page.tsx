import {HeaderLk} from "@/components/header/headerLk";
import Link from "next/link";
import {HeaderAuth} from "@/components/header/headerAuth";


export default function RegestryMailingPage() {
    return (
        <>
            <HeaderAuth/>
            <main className="mail">
                <div className="container_mail">
                    <p className="mail_title">Регистрация</p>
                    <p className="mail_subtitle_1">Чтобы закончить процесс регистрации, перейдите по ссылке, которую мы
                        отправили на почту dshahane@pzejw.com</p>
                    <p className="mail_subtitle_2">Ссылка действительна в течение 30 минут</p>
                    <div className="mail_links">
                        <Link className="back" href="/registration">Назад</Link>
                        <Link className="email_not_coming" href={'/welcome'}>
                            Письмо не приходит
                        </Link>
                        <Link href={'/welcome'} className="resend">
                            Отправить ещё раз
                        </Link>
                    </div>
                </div>

            </main>
        </>
    )
}

