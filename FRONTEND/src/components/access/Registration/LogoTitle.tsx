import Logo from "../../../reused-components/Logo";

function LogoTitle() {
  return (
    <section className="flex items-center font-bold heading-1 gap-2 mb-16">
      <Logo className="text-5xl primary-text" />
      <div className="mt-2">Brilliant</div>
    </section>
  );
}

export default LogoTitle;
