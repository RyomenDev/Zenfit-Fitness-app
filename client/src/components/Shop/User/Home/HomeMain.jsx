
import HomePhotoShoot from "./HomePhotoShoot";
import HomeInfo from "./HomeInfo";
import FeaturedProducts from "./FeaturedProducts";

function HomeMain() {
  return (
    <>
      <main className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-10 pb-14 lg:gap-6 lg:pt-12 lg:pb-16">
        <div className="flex-1 lg:w-1/2 p-4">
          <HomeInfo />
        </div>
        <div className="flex-1 lg:w-1/2 p-4">
          <HomePhotoShoot />
        </div>
      </main>
      <section className="bg-gray-50 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Discover Our Products
        </h2>
        <FeaturedProducts />
      </section>
    </>
  );
}

export default HomeMain;
