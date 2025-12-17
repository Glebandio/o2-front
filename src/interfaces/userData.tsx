// types/user.types.ts

// Интерфейс для API ключа
export interface ApiKey {
    id: number;
    public: string;
    secret: string;
    created_at?: string;  // если бэкенд возвращает дату создания
    is_active?: boolean;  // если нужно отслеживать активность ключа
}

// Интерфейс для сессии
export interface Session {
    id: number;
    name?: string;
    start_time?: string;
    end_time?: string;
    status?: 'active' | 'completed' | 'paused';
    description?: string;

    // Добавьте эти поля
    profit?: number;
    transactions?: number;
    win_rate?: number;
    unit_percent?: number;
    model?: string;
    exchange?: string;
    max_transactions?: number;
    created_at?: string;
    updated_at?: string;

    [key: string]: unknown;  // для дополнительных полей
}

// Основной интерфейс пользователя
export interface UserData {
    // Базовые поля
    id: number;
    username: string;
    email: string;
    name: string;
    our_email?: string;

    // Данные аутентификации
    token?: string;
    two_factor_auth: boolean;
    password_vataga?: string;

    // API ключи
    bybit_keys: ApiKey[];
    binance_keys: ApiKey[];

    // Сессии
    active_sessions: Session[];
    completed_sessions: Session[];

    // Счетчики (если бэкенд их возвращает)
    key_counter?: number;
    session_counter?: number;

    // Статистика (если есть)
    created_at?: string;
    last_login?: string;
    is_staff?: boolean;
    is_superuser?: boolean;

    // Дополнительные поля
    [key: string]: unknown;
}

// Интерфейс для ответа от API при логине
export interface LoginResponse {
    token: string;
    user_id: number;
    username: string;
    email: string;
    name: string;
    our_email: string;
    message: string;
}

// Интерфейс для обновления профиля
export interface UpdateProfileData {
    first_name?: string;
    last_name?: string;
    email?: string;
    two_factor_auth?: boolean;
    password?: string;
    password_vataga?: string;
}

// Интерфейс для добавления API ключа
export interface AddApiKeyRequest {
    public: string;
    secret: string;
}

// Интерфейс для ответа при добавлении ключа
export interface AddApiKeyResponse {
    id: number;
    public: string;
    secret: string;
    message?: string;
}