type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}
