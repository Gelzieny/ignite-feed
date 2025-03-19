import igniteLogo from '../assets/ignite-logo.svg';


export function Header() {
  return (
    <header className="bg-[var(--gray-800)] h-[80px] flex justify-center items-center">
      <img src={igniteLogo} alt="Logotipo do Ignite" className="h-14 py-4"/>
    </header>
  );
}