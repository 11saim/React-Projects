import Head from "./Head";
import Main from "./Main";
import Menu from "../assets/menu.png";

export default function NotesFolder({
  isDesktop,
  activePanel,
  setActivePanel,
}) {
  const shouldOpen = isDesktop || activePanel === "notesfolder";

  return (
    <>
      {shouldOpen && (
        <div className="NotesFolder fixed sm:static sm:h-1/2 z-25 max-h-screen sm:max-h-full overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
          <Head />
          <Main />
        </div>
      )}
      <div
        onClick={() =>
          setActivePanel((prev) =>
            prev === "notesfolder" ? null : "notesfolder",
          )
        }
        className="z-100 cursor-pointer fixed sm:hidden bg-[#4e4848] bottom-5 right-5 p-2 rounded-4xl"
      >
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
