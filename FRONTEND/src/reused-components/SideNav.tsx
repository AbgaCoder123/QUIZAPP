import Logo from "./Logo";
import SectionsTitle from "./SectionsTitle";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
{
  /* <FaBitcoin />; */
}
function SideNav() {
  return (
    <section className="onbackground w-[280px] h-screen md:flex hidden flex-col justify-between  oveflow-y-auto sticky top-0 left-0 bottom-0 py-8 px-6">
      <div className="w-full">
        <div className="w-full py-5 border-b myborder">
          <div className="w-full flex items-center gap-3 mb-5 px-3">
            <div className="w-[30px] h-[30px] rounded-md flex-shrink-0 flex items-center justify-center primary">
              <Logo color="text-white" icon_size={20} />
            </div>
            <SectionsTitle
              subtitle="CB"
              subtitle_class="background_text font-bold"
            />
          </div>
          <div className="flex items-center gap-3  px-3 py-2 rounded-lg">
            <div className="w-[30px] h-[30px] text-blue-500 rounded-md flex-shrink-0 flex items-center justify-center ">
              <BsCurrencyExchange size={20} />
            </div>
            <div>Sell</div>
          </div>
          <div className="flex items-center gap-3  px-3 py-2">
            <div className="w-[30px] h-[30px] text-lime-500 rounded-md flex-shrink-0 flex items-center justify-center ">
              <FaBitcoin size={20} />
            </div>
            <div>Buy</div>
          </div>
        </div>
        <div className="w-full py-5">
          <div className="w-full flex items-center gap-3 mb-5 px-3">
            <div className="w-[30px] h-[30px] rounded-md flex-shrink-0 flex items-center justify-center primary">
              <Logo color="text-white" icon_size={20} />
            </div>
            <SectionsTitle
              subtitle="Crypto Bits"
              subtitle_class="background_text font-bold"
            />
          </div>
          <div className="flex items-center gap-3  px-3 py-2 rounded-lg">
            <div className="w-[30px] h-[30px] text-amber-500 rounded-md flex-shrink-0 flex items-center justify-center ">
              <BsCurrencyExchange size={20} />
            </div>
            <div>History</div>
          </div>
          <div className="flex items-center gap-3  px-3 py-2">
            <div className="w-[30px] h-[30px] text-red-500 rounded-md flex-shrink-0 flex items-center justify-center ">
              <FaBitcoin size={20} />
            </div>
            <div>Bonus</div>
          </div>
          <div className="flex items-center gap-3  px-3 py-2">
            <div className="w-[30px] h-[30px] text-sky-500 rounded-md flex-shrink-0 flex items-center justify-center ">
              <TbSettingsFilled size={20} />
            </div>
            <div>Settings</div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 px-3 pt-8 border-t myborder">
        <div className="w-[30px] h-[30px] rounded-md flex-shrink-0 flex items-center justify-center ">
          <LuLogOut size={20} />
        </div>
        <div>Logout</div>
      </div>
    </section>
  );
}

export default SideNav;
