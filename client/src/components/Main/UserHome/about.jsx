export const About = (props) => {
  return (
    <div id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={props.data.img}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              alt="About Us"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 mb-8">
                {props.data ? props.data.paragraph : "Loading..."}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <ul className="list-disc list-inside text-gray-600">
                    {props.data
                      ? props.data.Why.map((item, index) => (
                          <li key={`${item}-${index}`} className="mb-2">
                            {item}
                          </li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <ul className="list-disc list-inside text-gray-600">
                    {props.data
                      ? props.data.Why2.map((item, index) => (
                          <li key={`${item}-${index}`} className="mb-2">
                            {item}
                          </li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const About = (props) => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-12 col-md-6">
//             {" "}
//             <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
//           </div>
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//               <h2>About Us</h2>
//               <p>{props.data ? props.data.paragraph : "loading..."}</p>
//               <h3>Why Choose Us?</h3>
//               <div className="list-style">
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul>
//                     {props.data
//                       ? props.data.Why.map((d, i) => (
//                           <li key={`${d}-${i}`}>{d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//                 <div className="col-lg-6 col-sm-6 col-xs-12">
//                   <ul>
//                     {props.data
//                       ? props.data.Why2.map((d, i) => (
//                           <li key={`${d}-${i}`}> {d}</li>
//                         ))
//                       : "loading"}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
