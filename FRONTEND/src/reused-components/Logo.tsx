import { HiLightBulb } from "react-icons/hi";
function Logo({
  className,
}: {
  icon_size?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <HiLightBulb  />
    </div>
  );
}

export default Logo;
