'use client'
import {HeaderLk} from "@/components/header/headerLk";
import {Menu} from "@/components/menu";
import {useEffect, useState} from "react";
import Image from "next/image";
import {ButtonPrimary} from "@/components/Buttons/ButtonPrimary";
import {useParams, useRouter} from "next/navigation";
import axios from "axios";
import {MODEL_SCORES, TRADES_CHART_CUMUL, TRADES_STATS, TRADES_STATS_DAILY} from "@/api/urls";
import {ModelsScoresProps, TradesModelChart, TradeStat, TradeStatDailyProps} from "@/interfaces/models";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';


import 'chartjs-adapter-date-fns';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Tooltip,
    Legend,
    Filler
);




export default function ModelsPage() {

    const params = useParams<{ model: string }>();
    const [loading, setLoading] = useState(true);
    const [models, setModels] = useState<TradeStat[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [deposit, setDeposit] = useState<number>(500);
    const [volume, setVolume] = useState<number>(10);
    const [tableInfo, setTableInfo] = useState<TradeStatDailyProps[]>([]);
    const [modelScores, setModelScores] = useState<ModelsScoresProps[]>([]);
    const [chartData, setChartData] = useState<any>(null);



    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            tooltip: {
                mode: 'index' as const,
                intersect: false,
            },
        },
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    tooltipFormat: 'dd.MM.yyyy HH:mm',
                },
            },
            y: {
                beginAtZero: false,
            },
        },
    };


    console.log(params.model);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                setLoading(true);

                const response = await axios.get<TradeStat[]>(TRADES_STATS);

                const response2 = await axios.get<ModelsScoresProps[]>(MODEL_SCORES);

                const filteredModels = response.data.filter(item =>
                    item.new_model_name?.includes(params.model)
                );

                const filteredModels2 = response2.data.filter(item =>
                    item.new_model_name?.includes(params.model)
                );

                const response3 = await axios.get<TradeStatDailyProps[]>(`${TRADES_STATS_DAILY}?new_model_score=${params.model}`);

                const response4 = await axios.get<TradesModelChart[]>(`${TRADES_CHART_CUMUL}?new_model_score=${params.model}`);

                console.log(response4);
                console.log(response3.data.slice(0, 5));
                setModels(filteredModels);
                setModelScores(filteredModels2);
                setTableInfo(response3.data.slice(0, 5));
                const chartSource = response4.data;

                const labels = chartSource.map(item =>
                    new Date(item.close_time_msk)
                );
                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Cumulative PnL',
                            data: chartSource.map(item => item.cumulative_pnl),
                            borderColor: 'rgba(0, 200, 83, 1)',
                            backgroundColor: 'rgba(0, 200, 83, 0.25)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 0,
                            borderWidth: 1,
                        },
                        {
                            label: 'PnL',
                            data: chartSource.map(item => item.pnl),
                            borderColor: 'rgba(33, 150, 243, 1)',
                            backgroundColor: 'rgba(33, 150, 243, 0.25)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 0,
                            borderWidth: 1,
                        },
                        {
                            label: 'MPU',
                            data: chartSource.map(item => item.mpu),
                            borderColor: 'rgba(156, 39, 176, 1)',
                            backgroundColor: 'transparent',
                            fill: false,
                            tension: 0.3,
                            pointRadius: 0,
                            borderWidth: 1,
                            borderDash: [1, 2],
                        },
                    ]
                });

                setError(null);
            } catch (err) {
                console.error('=== ОШИБКА ПРИ ЗАПРОСЕ ===', err);
                setError('Ошибка загрузки моделей');
            } finally {
                setLoading(false);
            }
        };

        if (params.model) {
            fetchModels();
        }
    }, [params.model]);

    const formatDate = (date: string) => {
        if (!date) return '';

        const [year, month, day] = date.split('-');
        return `${day}.${month}.${year}`;
    };

    const [page, setPage] = useState(0);

    return (
        <>
            <HeaderLk page={page} setPage={setPage}/>
            <main className="account">
                <Menu page={page} setPage={setPage}/>
                <div className="wrapper">
                    <main className="models_detailed_main">
                        <div className="models_detailed_right_part">
                            <div className="bread_crumbs">
                                <p>
                                    Модели
                                </p>
                                <p>
                                    {'>'}
                                </p>
                                <p>
                                    {params.model}
                                </p>
                            </div>
                            <div className="dropdown_models">
                                <p>
                                    {params.model}
                                </p>
                                <Image width={10} height={5} src="/images/dropdown_arrow.png" alt=""/>
                            </div>
                            <div className="filters">
                                <div className="filters_data">
                                    <p className="filters_data_title">
                                        Даты
                                    </p>
                                    <div className="filters_data_period_div">
                                        <p className="filters_data_period">
                                            20.04.2023–26.04.2023
                                        </p>
                                        <button className="filters_data_cross">
                                            <Image width={5} height={5} src="/images/filters_cross.png" alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div className="filters_deposit">
                                    <p className="filters_deposit_title">
                                        Депозит
                                    </p>
                                    <div className="filters_deposit_data_div">
                                        <input
                                            type={"number"}
                                            className="filters_deposit_data"
                                            value={deposit}
                                            onChange={(e) => setDeposit(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <div className="filters_volume">
                                    <p className="filters_volume_title">
                                        Единичный объём
                                    </p>
                                    <div className="filters_volume_data_div">
                                        <input
                                            type="number"
                                            className="filters_volume_data"
                                            value={volume}
                                            onChange={(e) => setVolume(Number(e.target.value))}
                                        />

                                    </div>
                                </div>
                                <button className="filters_apply">
                                    Применить
                                </button>
                            </div>
                            {models.length > 0 && (
                                <div className="main_info">
                                    <div className="main_info-period">
                                        <p>Период работы модели</p>
                                        <span>
                {formatDate(models[0].min_trade_date)} – {formatDate(models[0].max_trade_date)}
            </span>
                                    </div>
                                    <div className="main_info-total">
                                        <p>Total profit, $</p>
                                        <span>{((models[0].total_profit * volume) / 100).toFixed(2)}</span>
                                    </div>
                                    <div className="main_info-total">
                                        <p>Ликвидировало бы?</p>
                                        <span>{ models[0].min_mpu <= ((deposit*100)/volume) ? 'ДА' : 'НЕТ'}</span>
                                    </div>

                                    <div className="main_info-middle">
                                        <p>Среднее количество сделок</p>
                                        <span>{models[0].avg_trades_text}</span>
                                    </div>

                                    <div className="main_info-time">
                                        <p>Медианное время в сделке</p>
                                        <span>{models[0].time_in_trade_text}</span>
                                    </div>
                                </div>
                            )}

                            <div className="models_tables">
                                <div className="models_tables-left">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Measure Names</th>
                                            <th>20.04</th>
                                            <th>21.04</th>
                                            <th>22.04</th>
                                            <th>23.04</th>
                                            <th>25.04</th>
                                            <th>Итого</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="measure-column top-left">Прибыльных сделок</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                        <td key={index}>{item.cnt_profitable_trades}</td>
                                                    ))
                                            }
                                            <td className="total-column top-right">{tableInfo.reduce((sum, item) => sum + item.cnt_profitable_trades, 0)}</td>
                                        </tr>
                                        <tr>
                                            <td className="measure-column">Убыточных сделок</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                    <td key={index}>{item.cnt_loss_trades}</td>
                                                ))
                                            }

                                            <td className="total-column">{tableInfo.reduce((sum, item) => sum + item.cnt_loss_trades, 0)}</td>
                                        </tr>
                                        <tr>
                                            <td className="measure-column">Итог сделок</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                    <td key={index}>{item.cnt_trades}</td>
                                                ))
                                            }
                                            <td className="total-column"> {tableInfo.reduce((sum, item) => sum + item.cnt_trades, 0)}</td>
                                        </tr>
                                        <tr>
                                            <td className="measure-column">Умность</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                    <td key={index}>{item.smartness_day_pct}</td>
                                                ))
                                            }

                                            <td className="total-column">{tableInfo.reduce((sum, item) => sum + item.smartness_day_pct, 0)/5}</td>
                                        </tr>
                                        <tr>
                                            <td className="measure-column">Итог в ед.%</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                    <td key={index}>{item.profit_day.toFixed(2)}</td>
                                                ))
                                            }

                                            <td className="total-column">{tableInfo.reduce((sum, item) => sum + item.profit_day, 0).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td className="measure-column none bottom-left">Итог в $</td>
                                            {
                                                tableInfo.map((item, index) => (
                                                    <td key={index}>{((item.profit_day*100)/volume).toFixed(2)}</td>
                                                ))
                                            }
                                            <td className="total-column bottom-right">{(tableInfo.reduce((sum, item) => sum + item.profit_day, 0)*100/volume).toFixed(2)}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <div className="left-big">
                                        <div className="name">
                                            Кумулятивная прибыль (ед. % с учётом комиссии и фандингов)
                                        </div>
                                        <div style={{height:'14.0625rem'}}>
                                        {chartData && (
                                            <Line data={chartData} options={chartOptions} />
                                        )}
                                        </div>
                                    </div>

                                    <div className="left-two">
                                        <div className="left-two-block">
                                            <div className={'name'}>
                                                Максимальный МПУ по дням в ед.%
                                            </div>
                                            <Image width={312} height={234} src={'/images/two-one.png'} alt={''}/>
                                        </div>
                                        <div className="left-two-block">
                                            <div className={'name'}>
                                                Ед. % в день / Умность
                                            </div>
                                            <Image width={312} height={234} src={'/images/two-two.png'} alt={''}/>

                                        </div>
                                    </div>
                                </div>
                                <div className="models_tables-right">
                                    <div className="models_calculator">
                                        <div className="name">
                                            Калькулятор прибыли
                                        </div>
                                        <div className="calc">
                                            <div className="calc_row">
                                                <p>Количество дней</p>
                                                <input type="number" value={1}/>
                                            </div>
                                            <div className="calc_row">
                                                <p>Количество сделок</p>
                                                <input type="number" value={1}/>
                                            </div>
                                            <div className="calc_row">
                                                <p>Мой предел риска, %</p>
                                                <input type="number" value={20}/>
                                            </div>
                                            <div className="calc_row-end">
                                                <button>Применить</button>
                                            </div>
                                            <div className="line">
                                            </div>

                                            <div className="calc_cont">
                                                <p>
                                                    Ожидаемые значения
                                                </p>

                                                <div className="calc_cont-row">
                                                    <p>Ожидаемая прибыль <br/>(по сделкам / по дням, ед.%)</p>
                                                    <span>0.36 / 4.06</span>
                                                </div>
                                                <div className="calc_cont-row">
                                                    <p>Ожидаемая вероятность <br/>плохой сделки / дня с просадкой:</p>
                                                    <span className={'green'}>0.44% / 5.0%</span>
                                                </div>
                                                <div className="calc_cont-row">
                                                    <p>Максимум сделок/дней <br/>при заданном риске:</p>
                                                    <span >50 / 4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {modelScores.length>0 &&(
                                        <div className="models_rating">
                                            <div className="name">
                                                Оценка модели
                                            </div>
                                            <div className="models_rating-block">
                                                <div className="models_rating-block-row">
                                                    <p>Общая оценка от (1 до 10)</p>
                                                    {/*<span>{models[0].}</span>*/}
                                                </div>
                                                <div className="models_rating-block-row">
                                                    <p>Кумулятивная прибыль</p>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <button className={'accept'}>Подключить модель</button>
                                </div>
                            </div>

                        </div>
                    </main>

                </div>
            </main>
        </>
    )
}