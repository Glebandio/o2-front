import { useState } from "react";

interface InvestmentData {
    id: number;
    name: string;
    цвет: string;
    доходность: { значение: string; цвет: string };
    риски: { значение: string; цвет: string };
    ликвидность: { значение: string; цвет: string };
    срокОкупаемости: { значение: string; цвет: string };
    порогВхода: { значение: string; цвет: string };
    вовлеченность: { значение: number; цвет: string };
    путьСНуля: { значение: string; цвет: string };
    плюсы: { значение: string; цвет: string };
    минусы: { значение: string; цвет: string };
    особыеРиски: { значение: string; цвет: string };
    lifeChangeФактор: { значение: string; цвет: string };
}

const tableData: InvestmentData[] = [
    {
        id: 1,
        name: "Арбитраж криптовалют",
        цвет: "#4CAF50",
        доходность: { значение: "3-12%", цвет: "#E8F5E9" },
        риски: { значение: "Низкие", цвет: "#F1F8E9" },
        ликвидность: { значение: "Очень высокая", цвет: "#F9FBE7" },
        срокОкупаемости: { значение: "2-6 мес", цвет: "#FFFDE7" },
        порогВхода: { значение: "8000р", цвет: "#FFF8E1" },
        вовлеченность: { значение: 5, цвет: "#FFF3E0" },
        путьСНуля: { значение: "20 мин", цвет: "#FBE9E7" },
        плюсы: { значение: "Быстрая окупаемость, высокий уровень прозрачности", цвет: "#FCE4EC" },
        минусы: { значение: "Требуется вовлечение", цвет: "#F3E5F5" },
        особыеРиски: { значение: "Технические сбои", цвет: "#EDE7F6" },
        lifeChangeФактор: { значение: "Полная автоматизация, пассивный доход", цвет: "#E8EAF6" }
    },
    {
        id: 2,
        name: "Облигации РФ",
        цвет: "#2196F3",
        доходность: { значение: "1,3-2%", цвет: "#E3F2FD" },
        риски: { значение: "Низкие", цвет: "#E8F5E9" },
        ликвидность: { значение: "Низкая", цвет: "#F1F8E9" },
        срокОкупаемости: { значение: "1-3 года", цвет: "#F9FBE7" },
        порогВхода: { значение: "10000р", цвет: "#FFFDE7" },
        вовлеченность: { значение: 0, цвет: "#FFF8E1" },
        путьСНуля: { значение: "5-30 мин", цвет: "#FFF3E0" },
        плюсы: { значение: "Гарантии ACB", цвет: "#FBE9E7" },
        минусы: { значение: "Низкая доходность", цвет: "#FCE4EC" },
        особыеРиски: { значение: "Девальвация", цвет: "#F3E5F5" },
        lifeChangeФактор: { значение: "Минимальная доходность, не влияет на уровень жизни", цвет: "#EDE7F6" }
    },
    {
        id: 3,
        name: "ОФЗ в валюте",
        цвет: "#9C27B0",
        доходность: { значение: "0,6-3%", цвет: "#F3E5F5" },
        риски: { значение: "Очень низкие", цвет: "#EDE7F6" },
        ликвидность: { значение: "Средняя", цвет: "#E8EAF6" },
        срокОкупаемости: { значение: "3-5 лет", цвет: "#E3F2FD" },
        порогВхода: { значение: "10000р", цвет: "#E8F5E9" },
        вовлеченность: { значение: 0, цвет: "#F1F8E9" },
        путьСНуля: { значение: "15-60 мин", цвет: "#F9FBE7" },
        плюсы: { значение: "Защита от рублевых рисков", цвет: "#FFFDE7" },
        минусы: { значение: "Курсовые колебания", цвет: "#FFF8E1" },
        особыеРиски: { значение: "Санкционные риски", цвет: "#FFF3E0" },
        lifeChangeФактор: { значение: "Минимальная доходность, не влияет на уровень жизни", цвет: "#FBE9E7" }
    },
    {
        id: 4,
        name: "Счета и депозиты",
        цвет: "#FF9800",
        доходность: { значение: "0,5-1%", цвет: "#FFF3E0" },
        риски: { значение: "Очень низкие", цвет: "#FBE9E7" },
        ликвидность: { значение: "Средняя", цвет: "#FCE4EC" },
        срокОкупаемости: { значение: "1-5 лет", цвет: "#F3E5F5" },
        порогВхода: { значение: "10000р", цвет: "#EDE7F6" },
        вовлеченность: { значение: 3, цвет: "#E8EAF6" },
        путьСНуля: { значение: "1-3 дня", цвет: "#E3F2FD" },
        плюсы: { значение: "Надежность", цвет: "#E8F5E9" },
        минусы: { значение: "Дюрация", цвет: "#F1F8E9" },
        особыеРиски: { значение: "Инфляция", цвет: "#F9FBE7" },
        lifeChangeФактор: { значение: "Нет. Стабильный, но небольшой доход", цвет: "#FFFDE7" }
    },
    {
        id: 5,
        name: "Корпоративные облигации",
        цвет: "#F44336",
        доходность: { значение: "0,7-15%", цвет: "#FFEBEE" },
        риски: { значение: "Средние", цвет: "#FCE4EC" },
        ликвидность: { значение: "Высокая", цвет: "#F3E5F5" },
        срокОкупаемости: { значение: "2-7 лет", цвет: "#EDE7F6" },
        порогВхода: { значение: "10000р", цвет: "#E8EAF6" },
        вовлеченность: { значение: 3, цвет: "#E3F2FD" },
        путьСНуля: { значение: "1-3 дня", цвет: "#E8F5E9" },
        плюсы: { значение: "Выше доходность", цвет: "#F1F8E9" },
        минусы: { значение: "Кредитный риск", цвет: "#F9FBE7" },
        особыеРиски: { значение: "Дефолт", цвет: "#FFFDE7" },
        lifeChangeФактор: { значение: "Нет. Стабильный, но небольшой доход", цвет: "#FFF8E1" }
    },
    {
        id: 6,
        name: "Акции",
        цвет: "#00BCD4",
        доходность: { значение: "1-5%", цвет: "#E0F7FA" },
        риски: { значение: "Средние", цвет: "#E0F2F1" },
        ликвидность: { значение: "Очень высокая", цвет: "#E8F5E9" },
        срокОкупаемости: { значение: "3+ лет", цвет: "#F1F8E9" },
        порогВхода: { значение: "5000 руб", цвет: "#F9FBE7" },
        вовлеченность: { значение: 7, цвет: "#FFFDE7" },
        путьСНуля: { значение: "1-3 дня", цвет: "#FFF8E1" },
        плюсы: { значение: "Рост капитала", цвет: "#FFF3E0" },
        минусы: { значение: "Волатильность", цвет: "#FBE9E7" },
        особыеРиски: { значение: "Кризисы", цвет: "#FCE4EC" },
        lifeChangeФактор: { значение: "Может принести высокий доход, требует анализа", цвет: "#F3E5F5" }
    }
];

// Массив заголовков строк
const rowHeaders = [
    "Доходность (в мес)",
    "Риски",
    "Ликвидность",
    "Срок окупаемости",
    "Порог входа",
    "Вовлеченность (I-II)",
    "Путь с нуля (время)",
    "Плюсы",
    "Минусы",
    "Особые риски",
    "Life change фактор"
];

export const Table = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // При переключении данные сдвигаются: второй столбец = data[currentIndex]
    // третий = data[currentIndex + 1] и т.д.
    const getDataForColumn = (columnIndex: number) => {
        // columnIndex: 0 = первый столбец (заголовки)
        // columnIndex: 1 = второй столбец (основной, меняется)
        // columnIndex: 2-6 = столбцы 3-7 (следующие варианты)

        const dataIndex = (currentIndex + columnIndex - 1) % tableData.length;
        return tableData[dataIndex];
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? tableData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === tableData.length - 1 ? 0 : prev + 1));
    };

    // Функция для рендера точек вовлеченности
    const renderInvolvement = (level: number, color: string) => {
        const dots = [];
        for (let i = 1; i <= 7; i++) {
            dots.push(
                <span
                    key={i}
                    className={`dot ${i <= level ? 'active' : ''}`}
                    style={{
                        backgroundColor: i <= level ? color : '#e0e0e0'
                    }}
                />
            );
        }
        return dots;
    };

    // Получаем данные для ячейки
    const getCellData = (rowIndex: number, columnIndex: number) => {
        const data = getDataForColumn(columnIndex);
        if (!data) return { значение: "", цвет: "#FFFFFF" };

        switch (rowIndex) {
            case 0: return data.доходность;
            case 1: return data.риски;
            case 2: return data.ликвидность;
            case 3: return data.срокОкупаемости;
            case 4: return data.порогВхода;
            case 5: return {
                значение: `${data.вовлеченность.значение}/7`,
                цвет: data.вовлеченность.цвет
            };
            case 6: return data.путьСНуля;
            case 7: return data.плюсы;
            case 8: return data.минусы;
            case 9: return data.особыеРиски;
            case 10: return data.lifeChangeФактор;
            default: return { значение: "", цвет: "#FFFFFF" };
        }
    };

    // Заголовки столбцов (нумерация от 1 до 6, начинается с текущего индекса)
    const getColumnHeader = (colIndex: number): string => {
        if (colIndex === 0) return "Параметры";
        if (colIndex === 1) return "O2 Trading";

        // Для столбцов 3-7 показываем названия следующих вариантов
        const dataIndex = (currentIndex + colIndex - 1) % tableData.length;
        return tableData[dataIndex].name;
    };

    return (
        <section className="comparison-section">
            <div className="container">
                <h2 className="title">
                    Сравнительная таблица <br /> инвестиционных решений
                </h2>
                <p className="subtitle">
                    Посмотрите на плюсы и минусы нашего предложения в сравнении
                </p>

                {/* Навигация */}
                <div className="navigation">
                    <button className="nav-button prev" onClick={handlePrev}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="current-option" style={{ color: getDataForColumn(1).цвет }}>
                        {getDataForColumn(1).name}
                    </div>

                    <button className="nav-button next" onClick={handleNext}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Таблица */}
                <div className="table-container">
                    <table className="comparison-table">
                        <thead>
                        <tr>
                            {[0, 1, 2, 3, 4, 5, 6].map((colIndex) => (
                                <th
                                    key={colIndex}
                                    className={colIndex === 0 ? "first-column" : "data-column"}
                                    style={colIndex === 0 ? {} : {
                                        backgroundColor: colIndex === 1 ? getDataForColumn(colIndex).цвет : "#2196F3",
                                        color: "white"
                                    }}
                                >
                                    {getColumnHeader(colIndex)}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {rowHeaders.map((header, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Первый столбец - заголовки строк */}
                                <td className="first-column header-cell">
                                    {header}
                                </td>

                                {/* Столбцы с данными (2-7) */}
                                {[1, 2, 3, 4, 5, 6].map((colIndex) => {
                                    const cellData = getCellData(rowIndex, colIndex);
                                    const columnData = getDataForColumn(colIndex);

                                    return (
                                        <td
                                            key={colIndex}
                                            className="data-cell"
                                            style={{
                                                backgroundColor: cellData.цвет,
                                                borderLeft: colIndex === 1 ? `3px solid ${columnData.цвет}` : "none",
                                                borderRight: colIndex === 6 ? `3px solid ${columnData.цвет}` : "none",
                                                position: "relative"
                                            }}
                                        >
                                            {rowIndex === 5 ? (
                                                <div className="involvement-container">
                                                    {renderInvolvement(
                                                        parseInt(cellData.значение.split('/')[0]),
                                                        columnData.цвет
                                                    )}
                                                    <span className="involvement-value">{cellData.значение}</span>
                                                </div>
                                            ) : (
                                                cellData.значение
                                            )}

                                            {/* Индикатор текущего столбца (только для второго столбца) */}
                                            {colIndex === 1 && (
                                                <div
                                                    className="column-indicator"
                                                    style={{ backgroundColor: columnData.цвет }}
                                                />
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Индикаторы */}
                <div className="option-indicators">
                    {tableData.map((item, index) => (
                        <button
                            key={item.id}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                backgroundColor: currentIndex === index ? item.цвет : '#e0e0e0'
                            }}
                            aria-label={`Выбрать ${item.name}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .comparison-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #e8edf5 100%);
          min-height: 100vh;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
          color: #1a1a1a;
          line-height: 1.2;
        }
        
        .subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Навигация */
        .navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
        }
        
        .nav-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #2196F3;
          background: white;
          color: #2196F3;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-button:hover {
          background: #2196F3;
          color: white;
          transform: scale(1.1);
        }
        
        .current-option {
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          min-width: 300px;
          padding: 12px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          border: 2px solid currentColor;
        }
        
        /* Таблица */
        .table-container {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          margin-bottom: 30px;
          overflow-x: auto;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1000px;
        }
        
        /* Шапка таблицы */
        .comparison-table thead {
          background: #2196F3;
        }
        
        .comparison-table th {
          padding: 20px 15px;
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
          color: white;
          position: relative;
          white-space: nowrap;
        }
        
        .comparison-table th.first-column {
          text-align: left;
          padding-left: 25px;
          background: linear-gradient(135deg, #1565C0 0%, #0D47A1 100%);
        }
        
        /* Ячейки таблицы */
        .comparison-table td {
          padding: 18px 15px;
          text-align: center;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        /* Первый столбец с заголовками */
        .comparison-table td.first-column {
          text-align: left;
          padding-left: 25px;
          font-weight: 600;
          color: #2c3e50;
          background: #f8f9fa;
          border-right: 2px solid #e0e0e0;
          position: sticky;
          left: 0;
          z-index: 2;
        }
        
        .comparison-table td.header-cell {
          min-width: 200px;
        }
        
        /* Ячейки с данными */
        .comparison-table td.data-cell {
          min-width: 150px;
          max-width: 200px;
          word-wrap: break-word;
          color: #1a1a1a;
          position: relative;
        }
        
        .column-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          z-index: 1;
        }
        
        /* Вовлеченность */
        .involvement-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .dot.active {
          transform: scale(1.3);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .involvement-value {
          font-size: 0.85rem;
          color: #666;
          margin-left: 6px;
          font-weight: 500;
        }
        
        /* Индикаторы */
        .option-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        
        .indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        
        .indicator:hover {
          transform: scale(1.3);
          box-shadow: 0 0 8px rgba(0,0,0,0.2);
        }
        
        .indicator.active {
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(0,0,0,0.3);
        }
        
        /* Адаптивность */
        @media (max-width: 1200px) {
          .table-container {
            border-radius: 10px;
          }
          
          .comparison-table th,
          .comparison-table td {
            padding: 16px 12px;
            font-size: 0.9rem;
          }
          
          .current-option {
            min-width: 250px;
            font-size: 1.3rem;
          }
          
          .comparison-table td.first-column {
            min-width: 180px;
          }
          
          .comparison-table td.data-cell {
            min-width: 130px;
            max-width: 180px;
          }
        }
        
        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .navigation {
            gap: 15px;
            flex-direction: column;
          }
          
          .current-option {
            min-width: auto;
            width: 100%;
            max-width: 300px;
            font-size: 1.2rem;
            padding: 10px 15px;
          }
          
          .nav-button {
            width: 40px;
            height: 40px;
          }
          
          .comparison-table {
            min-width: 900px;
          }
          
          .comparison-table th,
          .comparison-table td {
            padding: 14px 10px;
            font-size: 0.85rem;
          }
          
          .comparison-table td.first-column {
            padding-left: 15px;
            min-width: 160px;
          }
          
          .comparison-table td.data-cell {
            min-width: 110px;
            max-width: 150px;
          }
          
          .involvement-container {
            gap: 4px;
          }
          
          .dot {
            width: 7px;
            height: 7px;
          }
          
          .involvement-value {
            font-size: 0.8rem;
            margin-left: 4px;
          }
        }
        
        @media (max-width: 480px) {
          .comparison-section {
            padding: 40px 15px;
          }
          
          .title {
            font-size: 1.7rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .option-indicators {
            gap: 8px;
          }
          
          .indicator {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
        </section>
    );
};