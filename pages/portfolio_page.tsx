import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../component/common/header";

import PortfolioField from "../component/portfolio_page/portfolio_field";

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isReloadDarkMode, setIsReloadDarkMode] = useState(true);

  useEffect(() => {
    if (Number(localStorage.getItem("darkMode"))) {
      setIsDarkMode(true);
      console.log("true", Number(localStorage.getItem("darkMode")));
    } else {
      setIsDarkMode(false);
      console.log("false", Number(localStorage.getItem("darkMode")));
    }
  }, [isReloadDarkMode]);

  const router = useRouter();

  const query = router.query;
  const portfolioName = query.portfolioName as string;

  const storeListSummary: string =
    "買い物用のwebアプリです。\n僕が初めて公開したアプリになります。\nとても愛着が湧いていて、スーパーへよく買い物に行くので愛用してます！\nこのWebアプリは自作アプリ第３号で、初の人にお見せできるwebアプリです。React、TypeScript、Firebaseを使いました。他の２つのアプリも同じです。";

  const visitorForecastAppSummary: string =
    "過去の来客数から、その日の来客数を予測するというwebアプリです。予測方法が単純、その日の予想人数しか出せないなど実用化できるレベルにはないので、公開してません。";

  const chatAppSummary: string =
    "初めて作ったwebアプリです。学習用として作成しました。L◯NEを真似してみましたが、コードがひどいのとcssも一部崩れている部分もあります。機能的には申し分はないと思いますが人に見せられるものではないです。";

  return (
    <div style={{ backgroundColor: isDarkMode ? "black" : "white" }}>
      <Header title="ポートフォリオ" />
      <div>
        {portfolioName == "StoreList" && (
          <PortfolioField
            portfolioName={portfolioName}
            imagePath="storeList.jpg"
            summary={storeListSummary}
            portfolioURL="https://storelist.vercel.app/shop_list_page"
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isReloadDarkMode={isReloadDarkMode}
            setIsReloadDarkMode={setIsReloadDarkMode}
          />
        )}
      </div>
      <div>
        {portfolioName == "VisitorForecastApp" && (
          <PortfolioField
            portfolioName={portfolioName}
            imagePath="visitorForecastApp.jpg"
            summary={visitorForecastAppSummary}
            portfolioURL=""
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isReloadDarkMode={isReloadDarkMode}
            setIsReloadDarkMode={setIsReloadDarkMode}
          />
        )}
      </div>
      <div>
        {portfolioName == "chatApp" && (
          <PortfolioField
            portfolioName={portfolioName}
            imagePath="chatApp.jpg"
            summary={chatAppSummary}
            portfolioURL=""
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            isReloadDarkMode={isReloadDarkMode}
            setIsReloadDarkMode={setIsReloadDarkMode}
          />
        )}
      </div>
    </div>
  );
}
