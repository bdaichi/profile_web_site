import NavBar from "../common/nav_bar"

type Props = {
    portfolioName: string
    imagePath: string
    summary: string
}

export default function Portfolio(props: Props) {

    return (
        <>
            <div className='flex justify-center'>
                <NavBar />
            </div>
            <div className='flex flex-col justify-center md:flex-row mt-52'>
                <div className='flex flex-col mx-4 md:mt-16 md:w-96'>
                    <p className='flex justify-center text-4xl'>{props.portfolioName}</p>
                    <img className='m-8' src={props.imagePath} />
                </div>
                <p className='flex flex-row justify-center items-center whitespace-pre-wrap text-base rounded-md border border-gray-400 p-12 mx-8 my-8 md:w-96'>{props.summary}</p>
            </div>
        </>
    )
}