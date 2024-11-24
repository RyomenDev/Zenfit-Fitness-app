export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            What our clients say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 italic">"{d.text}"</p>
                  <div className="mt-4 text-gray-800 font-semibold">
                    - {d.name}
                  </div>
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

// export const Testimonials = (props) => {
//   return (
//     <div id="testimonials">
//       <div className="container">
//         <div className="section-title text-center">
//           <h2>What our clients say</h2>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   <div className="testimonial">
//                     <div className="testimonial-image">
//                       {" "}
//                       <img src={d.img} alt="" />{" "}
//                     </div>
//                     <div className="testimonial-content">
//                       <p>"{d.text}"</p>
//                       <div className="testimonial-meta"> - {d.name} </div>
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
