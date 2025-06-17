import Image from 'next/image';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  img?: string;
}

export const ProjectItem = ({
  title,
  img = '/no-image.png',
}: ProjectItemProps) => {
  return (
    <div className="flex flex-row items-center justify-center p-4">
      <div className="flex flex-col items-end justify-center pr-8">
        <h3 className="text-7xl font-semibold">Project Title</h3>
        <Button variant={'outline'} className="mt-8 rounded-4xl px-6 py-1.5">
          Learn More!
          <MoveRight />
        </Button>
      </div>
      <Image
        style={{
          maxWidth: '724px',
          maxHeight: '474px',
          objectFit: 'contain',
        }}
        src={img}
        alt={title}
        width={724}
        height={474}
      />
    </div>
  );
};
