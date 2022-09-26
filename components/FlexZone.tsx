interface Props {}

const FlexZone: React.FC<Props> = ({}) => {
  return (
    <section className="p-3 pb-16 md:p-6 md:pb-16">
      <div className="mb-3 md:mb-6">
        <h2 className="mb-1">
          <span className="line-through opacity-25">No</span> Flex Zone 💪
        </h2>
        <span className="text-gray-600 dark:text-slate-300">
          Accolades and such
        </span>
      </div>
      <div
        className="xl:gridfff xl:space-y-0sda block max-w-7xl gap-3 space-y-4 pb-3"
        style={{ gridTemplateColumns: "repeat(2, minmax(300px, 1fr))" }}
      ></div>
    </section>
  );
};

export default FlexZone;
