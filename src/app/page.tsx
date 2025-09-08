import {Hero} from "@/app/home/components/hero/hero";
import {TelegramButt} from "@/components/TelegramButt";
import {Models} from "@/app/home/components/models";
import {Reviews} from "@/app/home/components/reviews";
import {Calculator} from "@/app/home/components/calculator";


export default function Home() {
  return (
    <main className={'frontpage'}>
        <Hero/>
        <TelegramButt/>
        <Models/>
        <Reviews/>
        <Calculator/>
    </main>
  );
}
