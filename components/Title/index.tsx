import { Separator } from '../ui/separator';

interface TitleProps {
  title: string | React.ReactNode;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="my-auto flex flex-col items-center">
      <div className="w-fit">
        <div className="mb-2 flex flex-row items-center justify-between">
          <Separator className="flex-1" />
          <div className="ml-4 shrink-0 text-xl whitespace-nowrap">
            {subtitle}
          </div>
        </div>
        <h2 className="text-center text-7xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};
