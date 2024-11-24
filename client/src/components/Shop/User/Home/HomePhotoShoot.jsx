
import photo1 from "./images/ShopHome-1.jpeg";
import photo2 from "./images/ShopHome-2.jpeg";
import photo3 from "./images/ShopHome-3.jpeg";

function HomePhotoShoot() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 md:grid-cols-1 md:gap-4">
      <div className="relative flex justify-center items-center overflow-hidden rounded-full transition-transform duration-300 hover:shadow-2xl transform hover:scale-105">
        <img
          src={photo1}
          className="w-[160px] h-[200px] lg:w-[240px] lg:h-[260px] object-cover"
          alt="model photograph"
        />
      </div>
      <div className="relative flex justify-center items-center overflow-hidden rounded-b-full transition-transform duration-300 hover:shadow-2xl transform hover:scale-105 mt-5 lg:mt-0">
        <img
          src={photo2}
          className="w-[160px] h-[200px] lg:w-[240px] lg:h-[260px] object-cover"
          alt="model photograph"
        />
      </div>
      <div className="relative flex justify-center items-center overflow-hidden col-span-2 row-span-2 rounded-t-full transition-transform duration-300 hover:shadow-2xl transform hover:scale-105">
        <img
          src={photo3}
          className="w-[240px] h-[260px] lg:w-[260px] lg:h-[300px] object-cover"
          alt="model photograph"
        />
      </div>
    </div>
  );
}

export default HomePhotoShoot;
