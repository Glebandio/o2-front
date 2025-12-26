import Image from "next/image";


export const Models = () => {
    return(
        <section className={'models'}>
            <div className="models__blur"></div>
            <div className="models__column">
                <h2>Прозрачная и подробная статистика <br/> по каждой модели </h2>
                <div className="models__row">
                    <div className="models__card">
                        <Image width={358} height={541} src={'/images/models/model.png'} alt={''}/>
                    </div>
                    <div className="models__card-middle">
                        <Image width={358} height={541} src={'/images/models/model.png'} alt={''}/>

                    </div>
                    <div className="models__card">
                        <Image width={358} height={541} src={'/images/models/model.png'} alt={''}/>

                    </div>
                </div>
            </div>
            <div className="models__foot">

            </div>
        </section>
    )
}