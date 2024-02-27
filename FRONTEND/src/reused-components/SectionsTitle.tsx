function SectionsTitle({
  title,
  subtitle,
  subtitle_class,
  title_class,
}: {
  title?: string;
  subtitle?: string;
  subtitle_class?: string;
  title_class?: string;
}) {
  return (
    <div className="">
      <div className={`text-xl font-bold ${title_class}`}>
        <p className="">{title}</p>
      </div>
      <div className={`${subtitle_class} text-base`}>
        <p className="">{subtitle}</p>
      </div>
    </div>
  );
}

export default SectionsTitle;
