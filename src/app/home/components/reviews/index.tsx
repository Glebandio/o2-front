import Image from "next/image";
import {ReviewsCard} from "@/styles/components/ReviewsCard";


export const Reviews = () => {
    return(
        <section className={'reviews'}>
            <h2>Отзывы наших клиентов</h2>
            <p className={'reviews__desc'}>Каждый отзыв - кейс, подтверждающий <span>прозрачность и эффективность нашего подхода</span></p>

            <div className="reviews__cards">
                <ReviewsCard/>
                <ReviewsCard/>
                <ReviewsCard/>
            </div>
            <div className="reviews__blur">
            </div>
        </section>
    )
}