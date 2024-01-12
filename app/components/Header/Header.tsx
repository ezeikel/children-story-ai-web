import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { NAVIGATION_LINKS } from '../../../constants';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  padding: var(--spacing-medium);
  height: 100px;

  a {
    color: var(--color-ink);
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const StyledLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-coral);
  }
`;

const Header = () => (
  <Wrapper>
    <Link href="/">
      <Image src="/images/logo.png" alt="Logo" width={160} height={48} />
    </Link>
    <ul>
      {NAVIGATION_LINKS.map((link) => (
        <li key={link.id}>
          <StyledLink href={link.path}>{link.label}</StyledLink>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Header;
