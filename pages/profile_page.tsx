import NavBar from "../component/common/nav_bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DetailedProfileField from "../component/profile_page/detailed_profile_field";
import DrawerIconButton from "../component/profile_page/drawer_icon_button";
import HobyyField from "../component/profile_page/hobby_field";
import PGCareerField from "../component/profile_page/pg_career_field";
import Header from "../component/common/header";

export default function ProfilePage() {
  const [isReloadDarkMode, setIsReloadDarkMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpenPGCareerDrawer, setIsOpenPGCareerDrawer] =
    useState<boolean>(false);
  const [isOpenHobbyDrawer, setIsOpenHobbyDrawer] = useState<boolean>(false);

  const openPGCareerDrawer = () => {
    setIsOpenPGCareerDrawer(true);
  };

  const closePGCareerDrawer = () => {
    setIsOpenPGCareerDrawer(false);
  };

  const openHobbyDrawer = () => {
    setIsOpenHobbyDrawer(true);
  };

  const closeHobbyDrawer = () => {
    setIsOpenHobbyDrawer(false);
  };

  useEffect(() => {
    if (Number(localStorage.getItem("darkMode"))) {
      setIsDarkMode(true);
      console.log("true", Number(localStorage.getItem("darkMode")));
    } else {
      setIsDarkMode(false);
      console.log("false", Number(localStorage.getItem("darkMode")));
    }
  }, [isReloadDarkMode]);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        height: "120%",
        paddingBottom: 30,
      }}
    >
      <Header title="プロフィール" />
      <div
        className="flex justify-center z-20"
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
      >
        <NavBar
          isReloadDarkMode={isReloadDarkMode}
          setIsReloadDarkMode={setIsReloadDarkMode}
          isDarkMode={isDarkMode}
        />
      </div>
      <div
        className="flex justify-center z-0"
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
      >
        <img
          className="opacity-25 mt-20 w-64 md:mt-36 w-72"
          src="profile.jpg"
        />
      </div>
      <div
        className="flex flex-col justify-center z-10 m-8"
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
      >
        <div className="flex justify-center">
          <DetailedProfileField />
        </div>
        <div
          className="flex flex-row items-center my-8 mt-12 md:mt-40 ml-6 border-b"
          style={{
            color: isDarkMode ? "white" : "black",
            borderColor: isDarkMode ? "#01a9f4" : "black",
          }}
        >
          <p className="flex justify-center text-xl md:text-2xl py-4">趣味</p>
          <div className="absolute right-9">
            <DrawerIconButton
              isOpenDrawer={isOpenHobbyDrawer}
              openDrawer={openHobbyDrawer}
              closeDrawer={closeHobbyDrawer}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
        <div>{isOpenHobbyDrawer && <HobyyField isDarkMode={isDarkMode} />}</div>
        <div
          className="flex flex-row items-center my-8 ml-6 border-b border-gray-300"
          style={{
            color: isDarkMode ? "white" : "black",
            borderColor: isDarkMode ? "#01a9f4" : "black",
          }}
        >
          <p className="flex justify-center text-lg md:text-2xl py-4">
            プログラミングについて
          </p>
          <div className="absolute right-9">
            <DrawerIconButton
              isOpenDrawer={isOpenPGCareerDrawer}
              openDrawer={openPGCareerDrawer}
              closeDrawer={closePGCareerDrawer}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
        <div className="mb-12">
          {isOpenPGCareerDrawer && <PGCareerField isDarkMode={isDarkMode} />}
        </div>
      </div>
    </div>
  );
}
