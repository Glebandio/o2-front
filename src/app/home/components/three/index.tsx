import Image from "next/image";

export const Three = () => {
    return (
        <section className={'three'}>
            <div className="three_image">
            <Image width={904} height={904} src={'/images/krugi.png'} alt={''} />
            </div>
            <div className="three_text">
                <div className="three_text-block">
                    <h2>O2 TRAIDING объединяет в себе три экспертизы</h2>
                    <p>
                        Благодаря постоянному анализу, объединяющему Trading, Data Science
                        и Business Development, наши модели стабильно приносят результат
                    </p>
                </div>
                <button>
                    начать зарабатывать
                </button>
            </div>
        </section>
    )
}