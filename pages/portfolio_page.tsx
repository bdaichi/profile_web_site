import { useRouter } from "next/router";
import Portfolio from "../component/portfolio_page/portfolio";

export default function PortfolioPage() {
    const router = useRouter()

    const query = router.query;
    const portfolioName = query.portfolioName as string;

    const imagePath = `${portfolioName}.jpg`

    const storeListSummary: string = '買い物用のwebアプリです。僕が初めて公開したアプリになります。とても愛着が湧いていて、スーパーへ買い物によく行くので愛用してます。'

    const visitorForecastAppSummary: string = '過去の来客数から、その日の来客数を予測するというwebアプリです。予測方法が単純、その日の予想人数しか出せないなど実用化できるレベルにはないので、公開してません。'

    const chatAppSummary: string = '初めて作ったwebアプリです。学習用として作成しました。L◯NEを真似してみましたが、コードがひどいのとcssも一部崩れている部分もあります。機能的には申し分はないと思いますが人に見せられるものではないです。'

    return (
        <>
            <div>{portfolioName == 'Store List' &&
                <Portfolio portfolioName={portfolioName} imagePath={imagePath} summary={storeListSummary} />
            }</div>
            <div>{portfolioName == 'VisitorForecastApp' &&
                <Portfolio portfolioName={portfolioName} imagePath={imagePath} summary={visitorForecastAppSummary} />
            }</div>
            <div>{portfolioName == 'chatApp' &&
                <Portfolio portfolioName={portfolioName} imagePath={imagePath} summary={chatAppSummary} />
            }</div>
        </>
    )
}