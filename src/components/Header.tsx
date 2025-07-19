import Container from "./Container";
import Axoneme from "./logos/Axoneme";
// import AxonemeNewLogo from "./logos/AxonemeNewLogo";
import Link from 'next/link';
import headerStyles from "@/styles/components/Header.module.scss";
import Typography from "./Typography";
import { NAV_LINKS } from "@/constants/nav";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={headerStyles.root}>
      <Container component='nav' className={headerStyles.nav}>
        <Link href="/" className={clsx(headerStyles.logo, headerStyles.headerLink)}>
          <Axoneme />
        </Link>
        
        <ul className={headerStyles.navList}>
          {NAV_LINKS.map((link) => (
            <Typography component='li' variant="link" className={headerStyles.navItem} key={link.label}>
              <Link  href={link.href} className={headerStyles.headerLink}>{link.label}</Link>
            </Typography>
          ))}
        </ul>
      </Container>
    </header>
  )
}
