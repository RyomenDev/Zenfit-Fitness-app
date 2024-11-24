export const Features = (props) => {
  return (
    <div id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Features
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
              >
                <i className={`${d.icon} text-4xl text-indigo-600 mb-4`}></i>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600">{d.text}</p>
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

// export const Features = (props) => {
//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Features</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };
