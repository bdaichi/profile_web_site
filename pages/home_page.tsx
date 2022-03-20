import { useEffect, useState } from "react";
import Header from "../component/common/header";
import NavBar from "../component/common/nav_bar";
import PortfolioTile from "../component/home_page/portfolio_tile";
import ProfileField from "../component/home_page/profile_field";

export default function HomePage() {
    const [isReloadDarkMode, setIsReloadDarkMode] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (Number(localStorage.getItem('darkMode'))) {
            setIsDarkMode(true)
            console.log('true', Number(localStorage.getItem('darkMode')))
        } else {
            setIsDarkMode(false)
            console.log('false', Number(localStorage.getItem('darkMode')))
        }
    }, [isReloadDarkMode])


    return (
        <>
            <Header title='ホームページ' />
            <div className='flex justify-center z-40' style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
                <NavBar isReloadDarkMode={isReloadDarkMode} setIsReloadDarkMode={setIsReloadDarkMode} isDarkMode={isDarkMode} />
            </div>
            <div className='flex flex-col' style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
                <div className='flex justify-center m-8 z-10 md:z-10 rounded-sm'>
                    <ProfileField darkMode={isDarkMode} />
                </div>
                <div className='absolute top-96 mt-12 md:top-0 md:mt-0 z-0' style={{ backgroundColor: isDarkMode ? 'black' : 'white', }}>
                    <PortfolioTile imagePath='storeList.jpg' portfolioName='StoreList' darkMode={isDarkMode} />
                    <PortfolioTile imagePath='visitorForecastApp.jpg' portfolioName='VisitorForecastApp' darkMode={isDarkMode} />
                    <PortfolioTile imagePath='chatApp.jpg' portfolioName='chatApp' darkMode={isDarkMode} />
                </div>
            </div>
            <div className='fixed top-28 md:top-0 z-0' style={{ width: '100%', height: '4%', backgroundColor: isDarkMode ? 'black' : 'white' }}>　</div>
        </>
    )
}