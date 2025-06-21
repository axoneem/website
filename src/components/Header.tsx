import { Container } from "./Container";
import AxonemeNewLogo from "./logos/AxonemeNewLogo";
import { ThreeDemo } from "./ThreeDemo";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 text-white px-6 lg:px-8 py-8 h-[var(--header-height)]">
      <Container component='nav' maxWidth={false} className="relative z-20 h-full flex items-center justify-between">
        <div className="w-16 h-16 text-primary">
          <AxonemeNewLogo />
        </div>
        
        <ul className="flex items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </Container>
      <div className="scroll-driven-background absolute overflow-hidden z-10">
        <ThreeDemo />
      </div>
    </header>
  )
}
