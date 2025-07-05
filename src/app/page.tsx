import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      Home page
    </div>
  );
}
