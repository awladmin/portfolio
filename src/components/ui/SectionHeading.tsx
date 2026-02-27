type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      )}
    </div>
  );
};
