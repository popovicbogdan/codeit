//MY OWN SLIDER WITHOUT ANIMATION
//
//

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./MySlider.scss";
// import { ReactComponent as Arrow } from "../../common/images/arrow.svg";

// const Slider = () => {
//   const [pics, setPics] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [lastIndex, setLastIndex] = useState(3);

//   useEffect(() => {
//     axios
//       .get("https://picsum.photos/v2/list?page=2&limit=10")
//       .then(res => setPics(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const imagesList = pics.map(pic => <img src={pic.download_url} alt="pic" />);
//   console.log(imagesList);
//   console.log("Indexes ", startIndex, lastIndex);

//   return (
//     <div className="slider">
//       <h2 className="title">BEST RATED PICTURES</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eos,
//         quasi atque labore cuvoluptate maiores...
//       </p>

//       <div className="pics-container">
//         <Arrow
//           className="arrow-left"
//           onClick={e => {
//             startIndex > 0 && setStartIndex(startIndex - 1);
//             startIndex > 0 && setLastIndex(lastIndex - 1);
//           }}
//         />
//         <div className="images">{imagesList.slice(startIndex, lastIndex)}</div>
//         <Arrow
//           className="arrow-right"
//           onClick={e => {
//             lastIndex < pics.length && setLastIndex(lastIndex + 1);
//             lastIndex < pics.length && setStartIndex(startIndex + 1);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;
