import { Button } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
    darkMode: boolean
}

export default function ProfileField(props: Props) {
    const router = useRouter()

    const routerProfilePage = () => {
        router.push('/profile_page')
    }

    return (
        <>
            <Button
                onClick={routerProfilePage}
            >
                <div className='mt-16 md:fixed md:top-44 md:left-8 p-8 border-b md:border-black rounded-md md:p-4 z-10 flex flex-col justify-center items-center m-4' style={{ backgroundColor: props.darkMode ? 'black' : 'white', borderColor: props.darkMode ? '#01a9f4' : '', borderTopWidth: 0.5, borderLeftWidth: 1, borderBottomWidth: 3, borderRightWidth: 1, }}>
                    <img className='m-4 rounded-full w-56 h-56 md:h-36 md:w-36 border' style={{ borderColor: props.darkMode ? '#01a9f4' : 'white' }} src='beppudaichi.jpg' />
                    <p className='text-3xl tracking-widest my-4' style={{ color: props.darkMode ? '#01a9f4' : 'black', fontFamily: '筑紫A丸ゴシック' }}>別府大地</p>
                </div>
            </Button>
        </>
    )
}