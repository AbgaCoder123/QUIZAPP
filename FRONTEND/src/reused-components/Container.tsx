// flex flex-col items-center justify-center gap-5
function Container({ addtional_class, children }: { addtional_class?: string,  children:React.ReactNode }) {
  return (
    <section
      className={`w-full max-w-[480px] min-h-[621px] ${
        addtional_class || ""
      }`}
    >
      {children}
    </section>
  );
}

export default Container;
