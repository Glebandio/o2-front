'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { USER_INFO } from "@/api/urls";
import { Session as SessionType } from "@/interfaces/userData";

export const Sessions = () => {
    const [activeSessions, setActiveSessions] = useState<SessionType[]>([]);
    const [completedSessions, setCompletedSessions] = useState<SessionType[]>([]);

    const getToken = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    };

    const getId = (): string | null => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('id');
        }
        return null;
    };

    const fetchSessions = async () => {
        const token = getToken();
        const id = getId();

        if (!token || !id) return;

        try {
            const response = await fetch(`${USER_INFO}/${id}/info`, {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
            });

            if (response.ok) {
                const userData = await response.json();
                setActiveSessions(userData.active_sessions || []);
                setCompletedSessions(userData.completed_sessions || []);
            }
        } catch (e) {
            console.error("Ошибка при загрузке сессий:", e);
        }
    };

    const completeSession = async (sessionId: number) => {
        const token = getToken();
        if (!token) return;

        try {
            const response = await fetch(`http://localhost:8000/api/admin-accounts/user/complete-session/`, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify({ session_id: sessionId }),
            });

            if (response.ok) {
                fetchSessions();
            }
        } catch (e) {
            console.error("Ошибка при завершении сессии:", e);
        }
    };

    useEffect(() => {
        fetchSessions();
    }, []);

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        try {
            return new Date(dateString).toLocaleDateString('ru-RU');
        } catch {
            return "";
        }
    };

    const calculateTotalProfit = () => {
        // @ts-ignore
        return activeSessions.reduce((sum:number, session:number) => sum + (session.profit || 0), 0).toFixed(2);
    };

    const calculateAvgWeeklyProfit = () => {
        if (activeSessions.length === 0) return "0.00";
        return (activeSessions.reduce((sum, session) => sum + (session.profit || 0), 0) / activeSessions.length).toFixed(2);
    };

    const calculateAvgTradeProfit = () => {
        const totalProfit = activeSessions.reduce((sum, session) => sum + (session.profit || 0), 0);
        const totalTrades = activeSessions.reduce((sum, session) => sum + (session.transactions || 0), 0);

        if (totalTrades === 0) return "0.00";
        return (totalProfit / totalTrades).toFixed(2);
    };

    return (
        <div className="sessions_right_part">
            <div className="profit_chart_div">
                <div className="profit_chart">
                    <p className="profit_chart_titlle">
                        Общий график прибыли
                    </p>
                    <div className="drop_downs_chart">
                        <button className="drop_downs_month">
                            Декабрь
                            <Image width={10} height={5} src="/images/black_aroww.png" alt=""/>
                        </button>
                        <button className="drop_downs_data">
                            Все время
                        </button>
                    </div>
                </div>
                <div className="container_profit_chart">
                    <div className="profit_chart_data">
                        <div className="total_profit">
                            <p className="total_profit_title">
                                Общая прибыль
                            </p>
                            <p className="total_profit_value">
                                {calculateTotalProfit()} USDT
                            </p>
                        </div>
                        <div className="average_profit_div">
                            <div className="average_profit">
                                <p className="average_profit_title">
                                    Средняя прибыль в неделю
                                </p>
                                <p className="average_profit_value">
                                    {calculateAvgWeeklyProfit()} USDT
                                </p>
                            </div>
                            <div className="average_profit">
                                <p className="average_profit_title">
                                    Средняя прибыль за сделку
                                </p>
                                <p className="average_profit_value">
                                    {calculateAvgTradeProfit()} USDT
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chart_sessions"></div>
                </div>
            </div>

            {/* Активные сессии */}
            <div className="sessions_div">
                <p className="sessions_title">
                    Активные сессии
                </p>
                <div className="sessions_head">
                    <div className="sessions_head_right_part">
                        <p>Сессия и модель</p>
                    </div>
                    <div className="sessions_head_left_part">
                        <p>Прибыль<br/>(USDT):</p>
                        <p>Сделки/ время</p>
                        <p>Win Rate:</p>
                        <p>Ед. %</p>
                        <p>Начало сессии</p>
                    </div>
                </div>
                <div className="sessions_list">
                    {activeSessions.map((session, index) => (
                        <div key={session.id || index} className="session_element">
                            <div className="session_and_model">
                                <p className="session_number">
                                    Сессия {session.id || index + 1}
                                </p>
                                <div className="session_data">
                                    <p className="session_name">
                                        {`${session.model}`}
                                        {session.exchange && ` (${session.exchange.toUpperCase()})`}
                                    </p>
                                    <div className="session_data_element">
                                        <p className={`session_profit ${(session.profit || 0) >= 0 ? '' : 'negative'}`}>
                                            {(session.profit || 0) >= 0 ? '+' : ''}{(session.profit || 0).toFixed(2)}
                                        </p>
                                        <p className="session_transaction_time">
                                            {session.transactions || 0} сделок {session.max_transactions ? `(из ${session.max_transactions})` : ''}
                                        </p>
                                        <p className="session_win_rate">
                                            {(session.win_rate || 0).toFixed(2)}%
                                        </p>
                                        <p className="session_unit_percent">
                                            {(session.unit_percent || 0).toFixed(2)}%
                                        </p>
                                        <p className="session_beginning">
                                            {formatDate(session.start_time || session.created_at)}
                                        </p>
                                    </div>
                                </div>
                                <div className="session_buttons">
                                    <button
                                        className="session_and"
                                        onClick={() => session.id && completeSession(session.id)}
                                    >
                                        Завершить сессию
                                    </button>
                                    <button className="session_more">
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Завершенные сессии */}
            <div className="sessions_div">
                <p className="sessions_title">
                    Завершённые сессии
                </p>
                <div className="sessions_head">
                    <div className="sessions_head_right_part">
                        <p>Сессия и модель</p>
                    </div>
                    <div className="sessions_head_left_part">
                        <p>Прибыль<br/>(USDT):</p>
                        <p>Сделки/ время</p>
                        <p>Win Rate:</p>
                        <p>Ед. %</p>
                        <p>Период работы</p>
                    </div>
                </div>
                <div className="sessions_list">
                    {completedSessions.map((session, index) => {
                        const getWorkPeriod = () => {
                            if (session.start_time && session.end_time) {
                                return `${formatDate(session.start_time)} - ${formatDate(session.end_time)}`;
                            }
                            return formatDate(session.created_at);
                        };

                        return (
                            <div key={`completed-${session.id || index}`} className="session_element">
                                <div className="session_and_model">
                                    <p className="session_number">
                                        Сессия {session.id || index + 1}
                                    </p>
                                    <div className="session_data">
                                        <p className="session_name">
                                            {session.name || `Сессия ${session.id}`}
                                            {session.model && ` - ${session.model}`}
                                            {session.exchange && ` (${session.exchange.toUpperCase()})`}
                                        </p>
                                        <div className="session_data_element">
                                            <p className={`session_profit ${(session.profit || 0) >= 0 ? '' : 'negative'}`}>
                                                {(session.profit || 0) >= 0 ? '+' : ''}{(session.profit || 0).toFixed(2)}
                                            </p>
                                            <p className="session_transaction_time">
                                                {session.transactions || 0} сделок {session.max_transactions ? `(из ${session.max_transactions})` : ''}
                                            </p>
                                            <p className="session_win_rate">
                                                {(session.win_rate || 0).toFixed(2)}%
                                            </p>
                                            <p className="session_unit_percent">
                                                {(session.unit_percent || 0).toFixed(2)}%
                                            </p>
                                            <p className="session_beginning">
                                                {getWorkPeriod()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="session_completed_div">
                                        <p className="session_completed">
                                            Сессия завершена
                                        </p>
                                        <p className="session_completed_time">
                                            {formatDate(session.end_time || session.updated_at)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};