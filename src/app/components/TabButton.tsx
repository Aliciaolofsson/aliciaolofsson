import { ReactNode } from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

export default function TabButton({
  active,
  selectTab,
  children,
}: TabButtonProps) {
  const buttonClasses = active
    ? ' font-semibold border-amber-300 border-b-2'
    : 'text-black';

  return (
    <button
      onClick={selectTab}
      className={`mr-4 hover:border-base-300 hover:border-b-2 ${buttonClasses}`}
    >
      {children}
    </button>
  );
}
