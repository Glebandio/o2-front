import Image from "next/image";

export const Piramida = () => {
    return(
        <section className={'piramida'}>
            <h2>За счёт чего формируется прибыль на рынке</h2>
            <div className="piramida_text">
                <div className="box_blue">
                    <div className="box_blue-left">
                        <p>Эффективные участники</p>
                        <span>10%</span>
                    </div>
                    <div className="box_blue-right">
                        <p>Зарабатывают на структурных преимуществах (технология, скорость, капитал, математика, доступ к данным)</p>
                    </div>
                </div>
                <div className="box_white">
                    <div className="box_white-left">
                        <p>Неэффективные участники</p>
                        <span>90%</span>
                    </div>
                    <div className="box_white-right">
                        Проигрывают из-за поведенческих ошибок (эмоции, стадность, отсутствие стратегии, слабая дисциплина)
                    </div>
                </div>

            </div>
            <p className={'piramida_text-last'}>
                Капитал эффективных участников растет за счет неэффективных. <br/>
                <b>Наш проект позволит Вам оказаться среди эффективных участников</b>
            </p>

            <Image width={786} height={786} src={'/images/piramida.png'} alt={''}/>
        </section>
    )
}