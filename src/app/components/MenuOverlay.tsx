import NavLink from './NavLink';

interface NavLinkProps {
  link: string;
  label: string;
}

interface MenuOverlayProps {
  links: NavLinkProps[];
  toggleNavbar: (isOpen: boolean) => void;
}

export default function MenuOverlay({ links, toggleNavbar }: MenuOverlayProps) {
  return (
    <ul className='items-center flex justify-center flex-col my-5 md:hidden '>
      {links.map((item, index) => (
        <li
          className='my-4 px-12 py-2 w-52 rounded-lg'
          onClick={() => {
            toggleNavbar(false);
          }}
          key={index}
        >
          <NavLink href={item.link} title={item.label} />
        </li>
      ))}
    </ul>
  );
}
