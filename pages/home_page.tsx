import NavBar from "../component/common/nav_bar";
import PortfolioTile from "../component/home_page/portfolio_tile";
import ProfileFeild from "../component/home_page/profile_feild";

export default function HomePage() {

    return (
        <>
            <div className='flex justify-center'>
                <NavBar />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center m-8'>
                    <ProfileFeild />
                </div>
                <div className='absolute top-96 mt-12 md:top-0 md:mt-0 z-0'>
                    <PortfolioTile imagePath='store List.jpg' portfolioName='Store List' />
                    <PortfolioTile imagePath='visitorForecastApp.jpg' portfolioName='VisitorForecastApp' />
                    <PortfolioTile imagePath='chatApp.jpg' portfolioName='chatApp' />
                </div>
            </div>
            <div className='fixed top-28 md:top-0 bg-white z-10' style={{ width: '100%', height: '4%' }}>　</div>
        </>
    )
}