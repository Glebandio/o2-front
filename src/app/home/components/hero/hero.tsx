"use client";

import { useState, useEffect } from 'react';
import { ButtonPrimary } from "@/components/Buttons/ButtonPrimary";
import Image from 'next/image';
import axios from 'axios';

export const Hero = () => {
    const [heroData, setHeroData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8000/api/homepage/hero/');
                if (response.data && response.data.length > 0) {
                    setHeroData(response.data[0]); // Use the first item
                } else {
                    throw new Error('No hero data found');
                }
                setError(null);
            } catch (err) {
                console.error('Error fetching hero data:', err);
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);

    return (
        <div className="hero">
            {loading ? (
                <></>
                // <p>Загрузка...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <>
                    <h1>
                        <span>{heroData?.head_text || 'Заголовок не загружен'}</span>
                        <br/>
                        {heroData?.desc_text || 'Описание не загружено'}

                    </h1>
                    <p>
                        <span>{heroData?.sec_text || 'Описание не загружено'}</span>
                    </p>
                    <ButtonPrimary width={466} text={'начать зарабатывать'} />
                    <div className="hero__light"></div>
                    <div className="hero__light"></div>
                    <div className="hero__light"></div>
                    <Image
                        className={'hero__notebook'}
                        width={100}
                        height={100}
                        src={'/images/hero/notebook.svg'}
                        alt={''}
                    />
                </>
            )}
        </div>
    );
};