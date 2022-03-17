import { Button } from "@mui/material"
import { useRouter } from "next/router"

type Props = {
    imagePath: string
    portfolioName: string
}

export default function PortfolioTile(props: Props) {
    const router = useRouter()

    const pageRouter = () => {
        router.push({
            pathname: '/portfolio_page',
            query: { portfolioName: props.portfolioName },
        });
    }

    return (
        <div className='my-4 mx-4 md:mt-24 md:mx-20'>
            <Button
                onClick={pageRouter}
            >
                <div className='flex flex-col justify-center items-center m-8 mt-32 md:mt-32 md:px-24'>
                    <img src={props.imagePath} />
                    <p className='text-2xl mx-4 my-4 mt-8 md:text-4xl' style={{ textTransform: 'none' }}>{props.portfolioName}</p>
                </div>
            </Button>
        </div>
    )
}