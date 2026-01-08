import '../styles/HomePage.css';

import HomeDesktopLayout from "./HomeDesktopLayout";
import HomeMobileLayout from "./HomeMobileLayout";

export default function HomePage() {
  return (
    <div>
      <div className="mobile">
        <HomeMobileLayout/>
      </div>
      <div className="desktop">
        <HomeDesktopLayout/>
      </div>
    </div>
  );
};