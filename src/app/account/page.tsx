'use client'
import {HeaderLk} from "@/components/header/headerLk";
import {Menu} from "@/components/menu";
import {Demo} from "@/components/Pages/Demo";
import {useState} from "react";
import {Models} from "@/components/Pages/models";
import {Sessions} from "@/components/Pages/sessions";
import {Profile} from "@/components/Pages/profile";


export default function Account() {

    const [page, setPage] = useState(0);

    const block= (page:number)=>{
        switch(page){
            case 0:
                return <Models/>;
            case 1:
                return <Sessions/>;
            case 2:
                return <Demo/>;
            case 3:
                return <Profile/>;
        }
    }


    return (
        <>
            <HeaderLk page={page} setPage={setPage}/>
            <main className="account">
                <Menu page={page} setPage={setPage}/>
                <div className="wrapper">
                    {block(page)}
                </div>

            </main>
        </>
    )
}