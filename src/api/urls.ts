
const BASE_URL = `https://glebandio-o2-back-v2-7fdf.twc1.net`;
// const BASE_URL = 'http://localhost:8000';

const BASE_API=`${BASE_URL}/api`;

export const LOGIN = `${BASE_API}/accounts/login/`;

export const REGISTRATION = `${BASE_API}/registration/signup/`;



 //========== MODELS ==========//
export const MODEL_SCORES = `${BASE_API}/analytics/model-scores/`;
export const TRADES_STATS = `${BASE_API}/analytics/trades-stats/`;
export const TRADES_STATS_DAILY = `${BASE_API}/analytics/trades-stats-daily/`;
export const TRADES_CHART_CUMUL = `${BASE_API}/analytics/trades-chart-cumul/`;
export const USER_INFO = `${BASE_API}/accounts/user`;