import NavBar from "../common/nav_bar"

import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    portfolioName: string
    imagePath: string
    summary: string
    portfolioURL: string
    isDarkMode: boolean
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
    isReloadDarkMode: boolean
    setIsReloadDarkMode: Dispatch<SetStateAction<boolean>>
}

export default function PortfolioField(props: Props) {

    useEffect(() => {
        if (Number(localStorage.getItem('darkMode'))) {
            props.setIsDarkMode(true)
            console.log('true', Number(localStorage.getItem('darkMode')))
        } else {
            props.setIsDarkMode(false)
            console.log('false', Number(localStorage.getItem('darkMode')))
        }
    }, [props.isReloadDarkMode])

    return (
        <>
            <div className='flex justify-center'>
                <NavBar isReloadDarkMode={props.isReloadDarkMode} setIsReloadDarkMode={props.setIsReloadDarkMode} isDarkMode={props.isDarkMode} />
            </div>
            <div className='flex flex-col justify-center md:flex-row mt-52 md:mt-72' style={{ color: props.isDarkMode ? '#00a9f4' : 'black', backgroundColor: props.isDarkMode ? 'black' : 'white' }}>
                <div className='flex flex-col mx-4 md:mt-16 md:w-96'>
                    <p className='flex justify-center text-4xl'>{props.portfolioName}</p>
                    <img className='m-8' src={props.imagePath} />
                </div>
                <div className='flex flex-col justify-center'>{props.portfolioURL &&
                    <>
                        <p className='flex justify-center  md:absolute md:inset-x-0 md:top-52' style={{ color: props.isDarkMode ? 'white' : 'black' }}>こちらから開けます！ぜひ！どうぞ！！</p>
                        <a className='flex justify-center border-b border-blue-400 mx-12 md:absolute md:inset-x-0 md:mx-72 md:top-60' style={{ color: '#00a9f4', }} href={props.portfolioURL}>{props.portfolioURL}</a>
                    </>
                }</div>
                <p className='flex flex-row justify-center items-center whitespace-pre-wrap text-base rounded-md border border-gray-400 p-12 mx-8 my-8 md:w-96' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>{props.summary}</p>
            </div>
        </>
    )
}