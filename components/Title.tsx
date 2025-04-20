export const Title = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <>
      <h1 className="font-tiltwarp mb-4 text-center text-4xl lg:text-6xl font-bold tracking-widest text-whitetomidgray uppercase">
        {title}
      </h1>
      <p className="text-md mb-16 text-center font-semibold uppercase text-whitetomidgray">
        {subtitle}
      </p>
    </>
  );
};
