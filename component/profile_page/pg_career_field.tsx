type Props = {
    isDarkMode: boolean
}

export default function PGCareerField(props: Props) {

    return (
        <div className='flex flex-col items-center' style={{ backgroundColor: props.isDarkMode ? 'black' : 'white' }}>
            <a className='flex justify-center text-lg my-8 border-b' style={{ color: '#01a9f4', borderColor: '#01a9f4' }} href='https://github.com/bdaichi/profile_web_site.git'>githubアカウント</a>
            <p className='flex justify-center text-lg py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>プログラミングを始めたきっかけ</p>
            <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>
                中学生の時にパソコンができる人に憧れを抱いていて、かっこいいなと思っていました。
                家の近くの高校の商業科に学力特待生として合格できたのでそこに入学しました。
                高校でWord、Excelを学びプログラミングにも興味が出てきたのですが、プログラミングの授業はなく
                教えられる先生もいなかったので、独学でプログラミングの学習をはじめました。
            </p>
            <p className='flex justify-center text-lg mt-8 py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>プログラミングをやってみて</p>
            <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>
                「大変だったな〜」の一言につきます(笑)。
                専門学生になってアプリ開発を始めたのですが、
                環境構築、APIなど、当然わからないことだらけで学習の毎日でした。
                その学習の中でも、僕がプログラミングでかなり大事だと思ったことがコードの書き方です。
                最初は機能を完成させることに集中していて、変数名をupdateなどの単語１つだけでつけていて、
                なにを更新するのか後から見てわからなかったり、１つのクラス、関数にたくさんコードを書いていて
                どこでエラーが出ているかわかりにくかったりしたので、コードを綺麗に読みやすく書くために、
                ドメイン駆動、リーダブルコードなどの参考書を読みながらコードを書きました。
                変数名は多少長くなってもいいから、
                読む人にとってわかりやすいようにと考えてつけるようにしました。
                また、コードを書く際には、値オブジェクトには何が必要なのか決め、その値オブジェクトをもとにドメインサービスを書き、
                関数、コンポーネントなどは組み合わせ方、使い方によってコードをどこまで分けるのか決めていました。
                まだまだ理解が浅く、たまに変数名がわかりにくかったり見にくいコードがあったりするので、
                常に意識しながらコードを書く癖をつけたいです。
            </p>
            <p className='flex justify-center text-lg mt-8 py-4' style={{ color: props.isDarkMode ? '#01a9f4' : 'black' }}>プログラミングに対する気持ち</p>
            <p className='flex justify-center text-base tracking-widest whitespace-pre-wrap mx-4 p-7 border border-gray-400 rounded-md' style={{ color: props.isDarkMode ? 'white' : 'black', borderColor: props.isDarkMode ? '#01a9f4' : 'black', }}>
                プログラミングを始めたばかりの頃はわからないことだらけで難しいという印象でした。
                途中で何度も挫折したんですが、どうしてもプログラミングができるようになって、
                プログラミングを好きになりたい、エンジニアとして将来働きたい、
                という思いが強かったので、立ち上がることができました。
                今ではプログラミングが好きだと思えることが多くなってきました。
                そして、この先プログラミングのことを好きでいたいという気持ちはずっと持ち続けたいです。
            </p>
        </div>
    )
}