import Header from "@/components/header/Header";
import LeftSidebar from "@/components/leftSidebar/LeftSidebar";
import RightSidebar from "@/components/rightsidebar/RightSidebar";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-between gap-10 p-5 md:p-0">
        <div className="bg-white md:block hidden w-1/6 min-h-screen rounded-tr-2xl p-5 shadow-md overflow-hidden relative">
          <div>
            <LeftSidebar />
          </div>
        </div>
        <div className="flex-1">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
