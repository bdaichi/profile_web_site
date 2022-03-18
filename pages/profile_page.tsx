import NavBar from "../component/common/nav_bar";
import { useState } from "react";
import DetailedProfileField from "../component/profile_page/detailed_profile_field";
import DrawerIconButton from "../component/profile_page/drawer_icon_button";
import HobyyField from "../component/profile_page/hobby_field";
import PGCareerField from "../component/profile_page/pg_career_field";

export default function ProfilePage() {
    const [isOpenPGCareerDrawer, setIsOpenPGCareerDrawer] = useState<boolean>(false)
    const [isOpenHobbyDrawer, setIsOpenHobbyDrawer] = useState<boolean>(false)


    const openPGCareerDrawer = () => {
        setIsOpenPGCareerDrawer(true)
    }

    const closePGCareerDrawer = () => {
        setIsOpenPGCareerDrawer(false)
    }

    const openHobbyDrawer = () => {
        setIsOpenHobbyDrawer(true)
    }

    const closeHobbyDrawer = () => {
        setIsOpenHobbyDrawer(false)
    }

    return (
        <>
            <div className='flex justify-center z-20'>
                <NavBar />
            </div>
            <div className='flex justify-center z-0'>
                <img className='opacity-25 mt-20 w-64 md:mt-36 w-72' src='profile.jpg' />
            </div>
            <div className='flex flex-col justify-center z-10 m-8'>
                <div className='flex justify-center'>
                    <DetailedProfileField />
                </div>
                <div className='flex flex-row items-center my-8 mt-12 md:mt-40 ml-6 border-b border-gray-300'>
                    <p className='flex justify-center text-xl md:text-2xl py-4'>趣味</p>
                    <div className='absolute right-9'>
                        <DrawerIconButton isOpenDrawer={isOpenHobbyDrawer} openDrawer={openHobbyDrawer} closeDrawer={closeHobbyDrawer} />
                    </div>
                </div>
                <div>{isOpenHobbyDrawer &&
                    <HobyyField />
                }</div>
                <div className='flex flex-row items-center my-8 ml-6 border-b border-gray-300'>
                    <p className='flex justify-center text-lg md:text-2xl py-4'>プログラミングについて</p>
                    <div className='absolute right-9'>
                        <DrawerIconButton isOpenDrawer={isOpenPGCareerDrawer} openDrawer={openPGCareerDrawer} closeDrawer={closePGCareerDrawer} />
                    </div>
                </div>
                <div>{isOpenPGCareerDrawer &&
                    <PGCareerField />
                }</div>
            </div>
        </>
    )
}