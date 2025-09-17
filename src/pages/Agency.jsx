// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React, { useRef } from "react";

// const Agency = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   const imageDivRef = useRef(null);
//   const imageRef = useRef(null);

//   const imageArray = [
//     "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
//     "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
//     "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
//     "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
//     "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",

//     "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
//     "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
//     "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",

//     "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
//     "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
//     "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
//     "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
//   ];

//   useGSAP(function () {
//     gsap.to(imageDivRef.current, {
//       scrollTrigger: {
//         trigger: imageDivRef.current,
//         markers: true,
//         start: "top 28.3%",
//         end: "top -142%",
//         scrub: true,
//         pin: true,
//         pinSpacing:true,
//         pinReparent:true,
//         pinType:'transform',
//         invalidateOnRefresh: true,
//         onUpdate: (elem) => {
//           let imageIndex;
//           if (elem.progress < 1) {
//             imageIndex = Math.floor(elem.progress * imageArray.length);
//           } else {
//             imageIndex = imageArray.length - 1;
//           }

//           imageRef.current.src = imageArray[imageIndex];
//         },
//       },
//     });
//   });

//   return (
//     <div>
//       <div className="section1 py-1">
//         <div
//           ref={imageDivRef}
//           className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-50 left-[31vw]"
//         >
//           <img
//             ref={imageRef}
//             className="h-full object-cover w-full "
//             src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
//             alt=""
//           />
//         </div>
//         <div className="relative font-[font2]">
//           <div className="mt-[55vh]">
//             <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
//               Soixan7t
//               <br />
//               Twelve
//             </h1>
//             <div className="pl-[40%] mt-20 ">
//               <p className="text-6xl">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our
//                 curiosity fuels our creativity. We remain humble and say no to
//                 big egos, even yours. A brand is alive. She has values, a
//                 personality, a history. If we forget that, we can make good
//                 numbers in the short term, but we kill it in the long term. This
//                 is why we are committed to giving perspective, to building
//                 influential brands.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="section2 h-screen"></div>
//     </div>
//   );
// };

// export default Agency;


import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

    const imageArray = [
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",

    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",

    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
  ];

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 1%',
        end: 'top -210%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-50 left-[31vw]">
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence