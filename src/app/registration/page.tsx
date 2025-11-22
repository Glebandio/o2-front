'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeaderLk } from "@/components/header/headerLk";
import Image from "next/image";

export default function Registry() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (password !== repeatPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("http://127.0.0.1:8000/api/registration/signup/", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data?.message || "Ошибка регистрации");
                setLoading(false);
                return;
            }

            // Например, токен приходит как data.token
            if (data.token) {
                localStorage.setItem("email", email)
                localStorage.setItem("token", data.token);   // сохраняем токен
                router.push("/profile");                     // редирект
            } else {
                alert("Токен не получен");
            }

        } catch (e) {
            console.error(e);
            alert("Ошибка соединения с сервером");
        }

        setLoading(false);
    };

    return (
        <>
            <HeaderLk/>
            <main className="registration">
                <div className="container_registration">
                    <p>Регистрация</p>

                    <input
                        className="email"
                        type="email"
                        placeholder="Почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="password_div">
                        <input
                            className="password"
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Image width={16} height={16} src="/images/Union.png" alt=""/>
                    </div>

                    <div className="password_div">
                        <input
                            className="password"
                            type="password"
                            placeholder="Повторите пароль"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <Image width={16} height={16} src="/images/Union.png" alt=""/>
                    </div>

                    <div className="agree_div">
                        <input className="checkbox" type="checkbox"/>
                        <a className="agree" href="">
                            Я ознакомился (-лась) с Соглашением<br/>
                            и Политикой обработки персональных данных
                        </a>
                    </div>

                    <div className="link_div">
                        <a href="/login">Уже есть аккаунт</a>
                    </div>

                    <button
                        className="button_create"
                        onClick={handleRegister}
                        disabled={loading}
                    >
                        {loading ? "Загрузка..." : "Создать аккаунт"}
                    </button>
                </div>
            </main>
        </>
    );
}
