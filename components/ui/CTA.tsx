// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const CTA = () => {
//   return (
//     <section className='cta-section'>
//       <div className='cta-badge'>
//         Start Learning your way.
//       </div>  

//       <h2 className='text-3xl font-bold'>
//         Build and Personalize Learning Companions
//       </h2>

//       <p>
//         Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
//       </p>

//       <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />

//       <Link href="/companions/new" className="btn-primary flex items-center gap-2 mt-4">
//         <Image
//           src="/icons/plus.svg"
//           alt="Plus Icon"
//           width={12}
//           height={12}
//         />
//         <span>Build a New Companion</span>
//       </Link>
//     </section>
//   );
// };

// export default CTA;


'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-8 shadow-xl flex flex-col gap-6">
      
      <div className="inline-block bg-white text-indigo-700 font-semibold text-sm px-3 py-1 rounded-full w-fit">
        Start Learning Your Way
      </div>  

      <h2 className="text-2xl font-bold leading-tight">
        Build and Personalize Learning Companions
      </h2>

      <p className="text-sm text-white/90 leading-relaxed">
        Pick a name, subject, voice, and personality — and start learning through
        voice conversations that feel natural and fun.
      </p>

      <div className="w-full">
        <Image
          src="/images/cta.svg"
          alt="Build Companion"
          width={362}
          height={232}
          className="mx-auto"
        />
      </div>

      <Link
        href="/companions/new"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-100 font-medium py-2 px-4 rounded-lg transition"
      >
        <Image
          src="/icons/plus.svg"
          alt="Plus Icon"
          width={14}
          height={14}
        />
        Build a New Companion
      </Link>
    </div>
  );
};

export default CTA;
