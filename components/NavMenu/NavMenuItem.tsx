import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface NavMenuItemProps {
  title: string;
  text: string;
  href: string;
}

export const NavMenuItem = ({ title, text, href }: NavMenuItemProps) => {
  return (
    <Link href={href} className="flex flex-col" style={{ maxWidth: '138px' }}>
      <div className="flex justify-between">
        <span className="text-foreground text-xl">{title}</span>
        <ArrowUpRight />
      </div>
      <span className="text-xs">{text}</span>
    </Link>
  );
};
