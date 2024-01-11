import { Heading, Text } from '@/components/elements';
import { AnimateEnter, Container } from '@/components/layout';

export default function Home() {
  return (
    <Container>
      <AnimateEnter delay={0.4}>
        <header>
          <Heading>Under development</Heading>
          <Text colour="secondary">This website is under development</Text>
        </header>
      </AnimateEnter>
    </Container>
  );
}
