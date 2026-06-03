function StatItem({ icon, value, title }) {
  return (
     <div className="flex flex-col items-center gap-1 px-2">
      <span className="bg-neutral-700 p-2 rounded-xl">{icon}</span>
      <span className="text-md lg:text-base text-neutral-100">{value}</span>
      <span className="text-neutral-500 text-xs uppercase tracking-wide text-center">{title}</span>
    </div>
  );
}

export default StatItem;
