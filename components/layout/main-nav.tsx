import Link from "next/link";
import Logo from "./main-logo";
import ThemeSwitch from "./dark-mode/theme-switch";

function MainNav() {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
