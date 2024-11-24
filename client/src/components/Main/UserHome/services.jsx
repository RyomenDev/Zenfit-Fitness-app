export const Services = (props) => {
  return (
    <div id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <i className={`${d.icon} text-4xl text-indigo-600 mb-4`}></i>
                <div className="service-desc">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {d.name}
                  </h3>
                  <p className="text-gray-600">{d.text}</p>
                </div>
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

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Our Services</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <div className="service-desc">
//                     <h3>{d.name}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
