import Navbar from "./Navbar";
import AddNote from "./AddNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";
import Menu from "../assets/menu.png";

export default function Sidebar({ isDesktop, activePanel, setActivePanel }) {
  const shouldOpen = isDesktop || activePanel === "sidebar";

  return (
    <>
      {shouldOpen && (
        <div className="Sidebar fixed sm:static max-h-screen sm:h-1/2 overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#181818] text-white sm:max-h-full">
          <div>
            <Navbar />
            <AddNote />
          </div>
          <div>
            <Recents />
            <Folders />
            <More />
          </div>
        </div>
      )}
      <div
        onClick={() =>
          setActivePanel((prev) => (prev === "sidebar" ? null : "sidebar"))
        }
        className="z-100 cursor-pointer fixed sm:hidden bg-[#4e4848] bottom-5 left-5 p-2 rounded-4xl"
      >
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
