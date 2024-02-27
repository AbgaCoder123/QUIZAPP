import { BsClockHistory, BsCurrencyExchange } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
export default function BottomNav() {
  return (
    <section className="fixed bottom-0 h-[70px] w-full onbackground px-10 sm:hidden">
      <div className="flex h-full w-full items-center justify-center gap-10">
        <div className="relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1">
          <BsCurrencyExchange size={20} strokeWidth={1} />
          <div className="text-[12px]">Sell</div>
        </div>
        <div className="relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1">
          <FaBitcoin size={20} strokeWidth={1} />
          <div className="text-[12px]">Buy</div>
        </div>
        <div className="relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1">
          <FaBitcoin size={20} strokeWidth={1} />
          <div className="text-[12px]">Bonus</div>
        </div>

        <div className="relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1">
          <BsClockHistory size={20} strokeWidth={1} />
          <div className="text-[12px]">History</div>
        </div>
        <div className="relative flex h-[50px] w-[50px] flex-col items-center justify-center gap-1">
          <TbSettingsFilled size={20} strokeWidth={1} />
          <div className="text-[12px]">Settings</div>
        </div>
      </div>
    </section>
  );
}
