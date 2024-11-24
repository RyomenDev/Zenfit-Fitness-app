import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

// import { Image } from "./image";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Gallery</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                   <div
//                     key={`${d.title}-${i}`}
//                     className="col-sm-6 col-md-4 col-lg-4"
//                   >
//                     <Image
//                       title={d.title}
//                       largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </div>
//                 ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
