"use client";
interface NavButtonProps {
  children: React.ReactNode;
  onHandle: () => void;
}
const NavButton = ({ children, onHandle }: NavButtonProps) => {
  return (
    <button aria-label="Open Menu" title="Open Menu" onClick={onHandle}>
      {children}
    </button>
  );
};

export default NavButton;
