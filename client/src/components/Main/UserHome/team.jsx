export const Team = (props) => {
  return (
    <div id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {d.name}
                  </h4>
                  <p className="text-gray-600">{d.job}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="col-md-8 col-md-offset-2 section-title">
//           <h2>Meet the Team</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div id="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
//                   <div className="thumbnail">
//                     {" "}
//                     <img src={d.img} alt="..." className="team-img" />
//                     <div className="caption">
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
