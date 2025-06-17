import { Fragment } from 'react';
import { Sparkle } from 'lucide-react';

interface RunningLineProps {
  items?: string[];
  rotateDeg?: number;
  translateX?: string;
}

export const RunningLine = ({
  items,
  rotateDeg = 0,
  translateX = '',
}: RunningLineProps) => {
  const transformStyle = `rotate(${rotateDeg}deg) translate(${translateX})`;

  return (
    <div
      style={{ transform: transformStyle }}
      className="bg-foreground relative w-full overflow-hidden py-4"
    >
      <div className="animate-marquee flex w-fit">
        {[...(items ?? []), ...(items ?? [])].map((item, index) => (
          <Fragment key={index}>
            <span
              key={index}
              className="text-accent hover:text-primary mx-4 flex items-center gap-2 text-3xl font-medium whitespace-nowrap duration-300"
            >
              {item}
            </span>
            <Sparkle
              className="hover:fill-primary"
              fill={'#0e7c7b'}
              height={50}
              width={50}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
