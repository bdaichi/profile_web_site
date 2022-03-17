import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import NavBar from "../component/common/nav_bar";
import { useState } from "react";

export default function ProfilePage() {
    const [isOpenCareerDrawer, setIsOpenCareerDrawer] = useState<boolean>(false)
    const [isOpenHobbyDrawer, setIsOpenHobbyDrawer] = useState<boolean>(false)


    const openCareerDrawer = () => {
        setIsOpenCareerDrawer(true)
    }

    const closeCareerDrawer = () => {
        setIsOpenCareerDrawer(false)
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
                <div className='flex flex-col items-center font-semibold absolute top-28 left-16' style={{ fontFamily: '筑紫A丸ゴシック', color: '#007ac1', WebkitTextStroke: '0.4px white' }}>
                    <img className='flex justify-center items-center rounded-full h-36 w-36 my-8' src='sita_zenra.jpg' />
                    <p className='flex justify-center text-3xl'>名前： 別府大地</p>
                    <p className='flex justify-center text-xl m-4 ml-6'>生年月日： 2002年5月20日</p>
                    <div className='flex flex-row justify-center items-center ml-4'>
                        <p className='flex justify-center text-xl'>年齢： 19歳</p>
                        <p className='flex justify-center text-xl mx-4'>血液型： A型</p>
                    </div>
                </div>
                <div className='flex flex-row items-center my-8 mt-12 md:mt-40 ml-6 border-b border-gray-300'>
                    <p className='flex justify-center text-xl md:text-2xl py-4'>趣味</p>
                    {!isOpenHobbyDrawer ?
                        <IconButton onClick={openHobbyDrawer} className='absolute right-9'>
                            <ExpandMoreIcon />
                        </IconButton>
                        :
                        <IconButton onClick={closeHobbyDrawer} className='absolute right-9'>
                            <ExpandLessIcon />
                        </IconButton>
                    }
                </div>
                <div>{isOpenHobbyDrawer &&
                    <>
                        <p className='flex justify-center text-xl py-4'>アニメ、漫画、筋トレ</p>
                        <p className='flex justify-center text-lg mt-8 py-4'>アニメ、漫画</p>
                        <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md'>
                            小さい頃から漫画が大好きで、中学２年生のときアニメオタクに開花しました。
                            手始めにラブライブ！そこからけいおん、CLANNAD、境界の彼方などの京都アニメーション作品にハマりだし
                            今では京都アニメーションをコンプリートしています(京アニ大好き♡)。
                            少年　ジャンプ、サンデー、マガジンはアニメは見ずに漫画を読む派で
                            500冊ほど漫画を持ってます。
                            「ぐらんぶる」という漫画が１番好きです。
                        </p>
                        <p className='flex justify-center text-lg mt-8 py-4'>筋トレ</p>
                        <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md'>
                            高校３年の夏からダイエット目的で筋トレをはじめました。
                            好きな筋肉はハムストリングと上腕三頭筋です。
                            ダイエットは成功したのですが、筋トレにハマってしまい今も続けています
                            最近自重トレーニングから卒業して、ダンベルを使った筋トレをはじめました。
                            自重よりきついのですが、筋肉に効いている感触、終わったあとの爽快感が増して
                            楽しいです。夏までに一回り体を大きくしたいです。
                            筋肉は１日にしてならず、継続してトレーニングに励みたいです。
                        </p>
                        <div className='flex flex-col justify-center items-center my-10'>
                            <p className='text-sm' style={{ fontFamily: 'Hannotate SC' }}>　↓　え？首と顎つながっとるやん</p>
                            <div className='flex flex-row'>
                                <img className='w-24 my-8' src='debu_face.jpg' />
                                <img className='w-24 my-8' src='debu_body.jpg' />
                            </div>
                            <p>↓</p>
                            <img className='w-48 my-8' src='profile.jpg' />
                        </div>
                    </>
                }</div>
                <div className='flex flex-row items-center my-8 ml-6 border-b border-gray-300'>
                    <p className='flex justify-center text-lg md:text-2xl py-4'>プログラミングについて</p>
                    {!isOpenCareerDrawer ?
                        <IconButton onClick={openCareerDrawer} className='absolute right-9'>
                            <ExpandMoreIcon />
                        </IconButton>
                        :
                        <IconButton onClick={closeCareerDrawer} className='absolute right-9'>
                            <ExpandLessIcon />
                        </IconButton>
                    }
                </div>
                <div>{isOpenCareerDrawer &&
                    <div className='flex flex-col'>
                        <p className='flex justify-center text-lg py-4'>プログラミングを始めたきっかけ</p>
                        <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md'>
                            中学生の時にパソコンができる人に憧れを抱いていて、かっこいいなと思っていました。
                            家の近くの高校の商業科に学力特待生として合格できたのでそこに入学しました。
                            高校でWord、Excelを学びプログラミングにも興味が出てきたのですが、プログラミングの授業はなく
                            教えられる先生もいなかったので、独学でプログラミングの学習をはじめました。
                        </p>
                        <p className='flex justify-center text-lg mt-8 py-4'>プログラミングに対する気持ち</p>
                        <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md'>
                            プログラミングを始めたばかりの頃はわからないことだらけで難しいという印象でした。
                            途中で何度も挫折したんですが、どうしてもプログラミングができるようになって、
                            プログラミングを好きになりたい、エンジニアとして将来働きたい、
                            という思いが強かったので、立ち上がることができました。
                            今ではプログラミングが好きだと思えることが多くなってきました。
                            そして、この先プログラミングのことを好きでいたいという気持ちはずっと持ち続けたいです。
                        </p>
                    </div>
                }</div>
            </div>
        </>
    )
}