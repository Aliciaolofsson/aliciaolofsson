import NavLink from './NavLink';

interface NavLinkProps {
  link: string;
  label: string;
}

interface MenuOverlayProps {
  links: NavLinkProps[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul>
      {links.map((item, index) => (
        <li key={index}>
          <NavLink href={item.link} title={item.label} />
        </li>
      ))}
    </ul>
  );
}
