// import React from 'react'
// import CompanionCard from '@/components/ui/CompanionCard'
// import CompanionsList from '@/components/ui/CompanionsList'
// import CTA from '@/components/ui/CTA'
// import { getAllCompanions } from '@/lib/actions/companion.action'
// import { getRecentSessions } from '@/lib/actions/companion.action'
// import { getSubjectColor } from '@/lib/utils'
// const Page = async () => {
//   const companions = await getAllCompanions({limit : 3})
//   const recentSessionsCompanions = await getRecentSessions(10)
//   return (
//     <main>
//       <h1 className='text-2xl underline'>Popular Companions</h1>
//       <section className='home-section'>
//         {companions.map((companion) => (
//           <CompanionCard
//             key={companion.id}
//             { ... companion}
//             color={getSubjectColor(companion.subject)}
//           />
//         ))}
//       </section>

//       <section className='home-section'>
//         <CompanionsList
//           title="Recently completed sessions"
//           companions={recentSessionsCompanions}
//           classNames="w-2/3 max-lg:w-full"
//         />
//         <CTA/>
//       </section>

//     </main>
//   )
// }

// export default Page

import React from 'react';
import CompanionCard from '@/components/ui/CompanionCard';
import CompanionsList from '@/components/ui/CompanionsList';
import CTA from '@/components/ui/CTA';
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action';
import { getSubjectColor } from '@/lib/utils';

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto space-y-16">
      {/* Hero Heading */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Popular Companions
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore high-rated companions curated just for you.
        </p>
      </section>

      {/* Companion Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      {/* Recent Sessions + CTA */}
      <section className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-2/3">
          <CompanionsList
            title="Recently Completed Sessions"
            companions={recentSessionsCompanions}
            classNames="w-full"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <CTA />
        </div>
      </section>
    </main>
  );
};

export default Page;
