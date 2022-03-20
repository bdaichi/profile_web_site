type Props = {
    isDarkMode: boolean
}

export default function HobyyField(props: Props) {

    return (
        <>
            <p className='flex justify-center text-xl py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>アニメ、漫画、筋トレ</p>
            <p className='flex justify-center text-lg mt-8 py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>アニメ、漫画</p>
            <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>
                小さい頃から漫画が大好きで、中学２年生のときアニメオタクに開花しました。
                手始めにラブライブ！そこからけいおん、CLANNAD、境界の彼方などの京都アニメーション作品にハマりだし
                今では京都アニメーションをコンプリートしています(京アニ大好き♡)。
                少年　ジャンプ、サンデー、マガジンはアニメは見ずに漫画を読む派で
                500冊ほど漫画を持ってます。
                「ぐらんぶる」という漫画が１番好きです。
            </p>
            <p className='flex justify-center text-lg mt-8 py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>筋トレ</p>
            <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>
                高校３年の夏からダイエット目的で筋トレをはじめました。
                好きな筋肉はハムストリングと上腕三頭筋です。
                ダイエットは成功したのですが、筋トレにハマってしまい今も続けています
                最近自重トレーニングから卒業して、ダンベルを使った筋トレをはじめました。
                自重よりきついのですが、筋肉に効いている感触、終わったあとの爽快感が増して
                楽しいです。夏までに一回り体を大きくしたいです。
                筋肉は１日にしてならず、継続してトレーニングに励みたいです。
            </p>
            <div className='flex flex-col justify-center items-center my-10' style={{ color: props.isDarkMode ? 'white' : 'black' }} >
                <p className='text-sm' style={{ fontFamily: 'Hannotate SC' }}>　↓　首と顎つながっとるやん</p>
                <div className='flex flex-row'>
                    <img className='w-24 my-8' src='debu_face.jpg' />
                    <img className='w-24 my-8' src='debu_body.jpg' />
                </div>
                <p>↓</p>
                <p className='mt-2' style={{ fontFamily: 'Hannotate SC' }}>ぱわーーー！！！</p>
                <img className='w-48 my-4' src='profile.jpg' />
            </div>
        </>
    )
}