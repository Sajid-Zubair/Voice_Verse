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
