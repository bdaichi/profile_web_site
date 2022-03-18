export default function DetailedProfileField() {

    return (
        <div className='flex flex-col items-center font-semibold absolute top-28 md:top-44' style={{ fontFamily: '筑紫A丸ゴシック', color: '#007ac1', WebkitTextStroke: '0.4px white' }}>
            <img className='flex justify-center items-center rounded-full h-36 w-36 my-8' src='sita_zenra.jpg' />
            <p className='flex justify-center text-3xl'>名前： 別府大地</p>
            <p className='flex justify-center text-xl m-4 ml-6'>生年月日： 2002年5月20日</p>
            <div className='flex flex-row justify-center items-center ml-4'>
                <p className='flex justify-center text-xl'>年齢： 19歳</p>
                <p className='flex justify-center text-xl mx-4'>血液型： A型</p>
            </div>
        </div>
    )
}