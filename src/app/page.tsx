import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightsidebar/RightSidebar";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex relative justify-between">
        <div className="bg-white md:block hidden w-52 min-h-screen rounded-tr-2xl p-5 shadow-md overflow-hidden relative">
          <div>
            <LeftSidebar />
          </div>
        </div>
        <div className="flex-1 px-5">
          <RightSidebar />
        </div>
        <div className="bg-header-bg h-96 w-full absolute -z-10 rounded-br-[100px] md:rounded-br-[100px] md:rounded-bl-[100px]"></div>
      </div>
    </div>
  );
}
