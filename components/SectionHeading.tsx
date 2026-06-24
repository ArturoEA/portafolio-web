type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl 2xl:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-100 2xl:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
