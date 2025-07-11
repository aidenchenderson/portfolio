import NavBar from '@/components/navbar/navbar';
import HomePage from '../components/home';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main>
      <NavBar/>
      <HomePage/>
    </main>
  );
}
