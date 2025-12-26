export interface ModelsProps {
    id:number;
    new_model_name: string;
    trade_date_msk: string;
    cnt_profitable_trades: number;
    cnt_loss_trades: number;
    cnt_trades: number;
    smartness_day_pct: number;
    profit_day: number;
}

export interface ModelsScoresProps {
    new_model_name: string;
    final_score_10pt: number;
    cumulative_rating: number;
    mpu_rating: number;
    smart_rating: number;
    smoothness_rating: number;
}

export interface TradeStat {
    id:number;
    new_model_name: string;
    pnl_per_trade_pct: number;
    pnl_per_day_pct: number;
    bad_trades_pct: number;
    drawdown_days_pct: number;
    total_profit: number;
    min_trade_date: string;
    max_trade_date: string;
    profitable_trades_pct: number;
    smartness_pct: number;
    min_mpu: number;
    avg_trades_text: string;
    time_in_trade_text: string;
}

export interface TradesModelChart{
    "new_model_name": string;
    "cumulative_pnl": number;
    "pnl": number;
    "mpu": number;
    "pnl_label_text": string;
    "mpu_label_text": string;
    "close_time_msk": string;
}

export interface TradeStatDailyProps {
    "new_model_name": string;
    "trade_date_msk": string;
    "cnt_profitable_trades": number;
    "cnt_loss_trades": number;
    "cnt_trades": number;
    "smartness_day_pct": number;
    "profit_day": number;
}

export interface CalculatorData {
    data: TradeStat[];
    loading: boolean;
    error: string | null;
    fetchData: () => Promise<void>;
}