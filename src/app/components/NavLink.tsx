import Link from 'next/link';

interface NavLinkProps {
  href: string;
  title: string;
  onClickEvent? : () => boolean;
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link className='flex justify-center items-center p-5 font-semibold' href={href}>
      <h1>{title}</h1>
    </Link>
  );
}
