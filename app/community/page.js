import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

import styles from "./page.module.css";

export default function GourmetGuidePage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Discover Culinary Delights:{" "}
          <span className={styles.highlight}>Gourmet Guide</span>
        </h1>
        <p>Join our community and explore exquisite cuisines!</p>
      </header>
      <main className={styles.main}>
        <h2>Community Perks</h2>

        <ul className={styles.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Connect with fellow food enthusiasts</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive culinary events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
