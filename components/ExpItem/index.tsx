interface ExpItemProps {
  numberStr: string;
  position: string;
  company: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string | React.ReactNode;
}

export const ExpItem = ({
  numberStr,
  position,
  company,
  country,
  startDate,
  endDate,
  description,
}: ExpItemProps) => {
  return (
    <div className="group hover:bg-rolling-stones rounded-lg border px-16 py-12">
      <div className="flex flex-row">
        <div className="group-hover:bg-primary bg-rolling-stones p-4 text-5xl font-medium">
          {numberStr}
        </div>
        <div className="ml-9 flex flex-col justify-start">
          <span className="text-5xl font-medium">{position}</span>
          <span className="text-2xl font-medium">
            {company} - {country}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2 border-l-2 pl-12 text-2xl font-medium">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="mt-12 hidden group-hover:block">{description}</div>
    </div>
  );
};
