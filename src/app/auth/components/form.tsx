'use client'
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

export const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };



    const handleSubmit = async () => {
        // Проверка заполненности всех полей
        if (!formData.username.trim() || !formData.password.trim()) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://glebandio-o2-back-v2-7fdf.twc1.net/api/accounts/login/', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFTOKEN': '3YG9q4jILKO95q0HwgrsBChJjnrtt5lCcU4Tz6kflAfn3IoeI7fMfSUqLsgwQuek'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const data = await response.json();
            console.log("Успешный вход:", data);

            // Сохраняем токен если он есть в ответе
            if (data.token) {
                localStorage.setItem("email", formData.username);
                localStorage.setItem('token', data.token);

                router.push('/profile');
            }

            // Здесь можно добавить редирект или другие действия после успешного входа

        } catch (error) {
            console.error("Ошибка при входе:", error);
            alert("Произошла ошибка при входе");
        } finally {
            setLoading(false);
        }
    };

    // Обработчик нажатия Enter в любом из полей ввода
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <>
            <main className="auth">
                <div className="container">
                    <p>Вход</p>
                    <input
                        className="email"
                        type="text"
                        name="username"
                        placeholder="E-mail"
                        value={formData.username}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        required
                    />
                    <div className="password_div">
                        <input
                            className="password"
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            required
                        />
                        <Image width={16} height={16} src="/images/Union.png" alt=""/>
                    </div>
                    <div className="links">
                        <Link href="/registration">Забыли пароль?</Link>
                        <Link href="/registration">Создать аккаунт</Link>
                    </div>
                    <button onClick={handleSubmit} disabled={loading}>
                        {loading ? "Вход..." : "Войти"}
                    </button>
                </div>
            </main>
        </>
    )
}