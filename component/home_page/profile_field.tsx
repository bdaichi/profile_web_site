import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function ProfileField() {
    const router = useRouter()

    const routerProfilePage = () => {
        router.push('/profile_page')
    }

    return (
        <>
            <Button
                onClick={routerProfilePage}
            >
                <div className='mt-16 md:fixed md:top-44 md:left-8 p-8 md:shadow-2xl rounded-md md:p-4 bg-white z-20 flex flex-col justify-center items-center m-4'>
                    <img className='m-4 rounded-full w-56 h-56 md:h-36 md:w-36' src='beppudaichi.jpg' />
                    <p className='text-3xl tracking-widest my-4' style={{ color: 'black', fontFamily: '筑紫A丸ゴシック' }}>別府大地</p>
                </div>
            </Button>
        </>
    )
}