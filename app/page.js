import Link from "next/link";

// import ImageSlideshow from "@/components/Images/images-slideshow";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideShow}>{/* <ImageSlideshow /> */}</div>
        <div>
          <div className={styles.hero}>
            <h1> Navigate the World of Exquisite Flavors</h1>
            <p>Discover and Delight in Every Bite</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals ">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How It Works</h2>
          <p>
            Gourmet Guide is your gateway to the world's finest culinary
            experiences. Explore a diverse array of recipes curated by food
            enthusiasts and professional chefs alike.
          </p>
          <p>
            Whether you're looking to try a new cuisine or perfect a classic
            dish, Gourmet Guide provides the inspiration and guidance you need.
            Connect with a community of fellow food lovers, share your own
            creations, and expand your culinary horizons.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Gourmet Guide?</h2>
          <p>
            Gourmet Guide is more than just a recipe platform; it's a
            celebration of food and culture. Discover hidden gems and iconic
            dishes from around the globe, all in one place.
          </p>
          <p>
            Join a vibrant community passionate about food, and gain access to
            exclusive content, tips, and techniques from top culinary experts.
            With Gourmet Guide, every meal becomes an adventure.
          </p>
        </section>
      </main>
    </>
  );
};
export default Home;
