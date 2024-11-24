export const Header = (props) => {
  //   console.log("Header", props);

  return (
    <>
      <header
        id="header"
        className="relative top-0 h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex justify-center items-center h-full">
          <div className="text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              {props.data ? props.data.paragraph : "Loading"}
            </p>
            <a
              href="#features"
              className="inline-block mt-8 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

