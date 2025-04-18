const FilterButton = () => {
  return (
    <ul className={`flex space-x-6 items-center mb-4`}>
      <li className="border-b-4 border-transparent pb-2 h-10 transition-all border-b-[var(--accent-9)]">
        <button className="text-secondary bg-transparent transition-all cursor-pointer !text-2xl !font-bold !text-[var(--accent-9)]">
          Kitchen
        </button>
      </li>
    </ul>
  );
};

export default FilterButton;
