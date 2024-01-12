'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  height: calc(100vh - 100px);
  width: 100vw;
  overflow: hidden;
`;

const Video = styled.video`
  height: 100%
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(251, 122, 79, 0.5);
  padding: var(--spacing-medium);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-large);
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: var(--font-tommy-soft);
  font-weight: 500;
  font-size: 3.8rem;
  color: var(--color-white);
  text-align: center;
  margin: 0;
  word-wrap: break-word;
  @media (min-width: 768px) {
    font-size: 7.2rem;
  }
`;

const Subheading = styled.h3`
  font-family: var(--font-tommy-soft);
  font-weight: 300;
  font-size: 2rem;
  color: var(--color-white);
  text-align: center;
  margin: 0;
  word-wrap: break-word;
  @media (min-width: 768px) {
    font-size: 4.2rem;
  }
`;

const Button = styled.button`
  padding: var(--spacing-medium) var(--spacing-large);
  background-color: var(--color-purple);
  color: var(--color-white);
  border: 3px solid var(--color-purple);
  border-radius: var(--border-radius);
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-white);
    border-color: var(--color-white);
    a {
      color: var(--color-purple);
    }
  }
`;

const Hero = () => (
  <Wrapper>
    <Video autoPlay loop muted playsInline>
      <source src="/videos/kids-bedtime.mp4" type="video/mp4" />
    </Video>
    <Overlay>
      <Heading>Welcome to a World Where Your Voice Creates Magic!</Heading>
      <Subheading>
        ✨ Dream, Speak, and Discover the Magic of Your Words! ✨
      </Subheading>
      <Link href="/magic-microphone">
        <Button>Start Your Journey</Button>
      </Link>
    </Overlay>
  </Wrapper>
);

export default Hero;
