'use client'
import {Hero} from "@/app/home/components/hero/hero";
import {TelegramButt} from "@/components/TelegramButt";
import {Models} from "@/app/home/components/models";
import {Reviews} from "@/app/home/components/reviews";
import {Calculator} from "@/app/home/components/calculator";
import {Advantages} from "@/app/home/components/advantages";
import {Demo} from "@/app/home/components/demo";
import {Piramida} from "@/app/home/components/piramida";
import {Three} from "@/app/home/components/three";
import {Table} from "@/app/home/components/Table";
import {Message} from "@/app/home/components/message";
import {FAQ} from "@/app/home/components/faq";
import {Phone} from "@/app/home/components/phone";
import {Footer} from "@/components/footer/footer";
import {Header} from "@/components/header/header";



export default function Home() {


  return (
      <>
        <Header />
        <main className={'frontpage'}>
        <Hero/>
        <TelegramButt/>
        <Models/>
        <Reviews/>
        <Calculator/>
        <Advantages/>
        <Piramida/>
        <Three/>
        {/*<Table/>*/}
        <Message/>
        <FAQ/>
        <Phone/>
        <Footer/>
    </main>
      </>
  );
}
