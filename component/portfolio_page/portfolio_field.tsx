import NavBar from "../common/nav_bar"

type Props = {
    portfolioName: string
    imagePath: string
    summary: string
    portfolioURL: string
}

export default function PortfolioField(props: Props) {

    return (
        <>
            <div className='flex justify-center'>
                <NavBar />
            </div>
            <div className='flex flex-col justify-center md:flex-row mt-52 md:mt-72'>
                <div className='flex flex-col mx-4 md:mt-16 md:w-96'>
                    <p className='flex justify-center text-4xl'>{props.portfolioName}</p>
                    <img className='m-8' src={props.imagePath} />
                </div>
                <div className='flex flex-col justify-center'>{props.portfolioURL &&
                    <>
                        <p className='flex justify-center  md:absolute md:inset-x-0 md:top-52'>こちらから開けます！ぜひ！どうぞ！！</p>
                        <a className='flex justify-center border-b border-blue-400 mx-12 md:absolute md:inset-x-0 md:mx-72 md:top-60' style={{ color: '#00a9f4', }} href={props.portfolioURL}>{props.portfolioURL}</a>
                    </>
                }</div>
                <p className='flex flex-row justify-center items-center whitespace-pre-wrap text-base rounded-md border border-gray-400 p-12 mx-8 my-8 md:w-96'>{props.summary}</p>
            </div>
        </>
    )
}