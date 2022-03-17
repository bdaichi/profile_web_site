import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter()

    const routerHomePage = () => {
        router.push('/home_page')
    }

    return (
        <Button
            onClick={routerHomePage}
        >
            <div className='fixed top-0 flex flex-col z-20 border-b border-black pb-6 p-12 bg-white' style={{ width: '90%', maxWidth: 1000, }}>
                <CssBaseline />
                <p className='flex justify-center text-4xl tracking-widest md:my-8' style={{ fontFamily: 'Impact', textShadow: '1px 8px 5px', WebkitTextStroke: '1px white' }}>BEPPU DAICHI</p>
            </div>
        </Button>
    )
}