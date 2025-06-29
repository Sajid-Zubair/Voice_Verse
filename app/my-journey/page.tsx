// import React from 'react'
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import { currentUser } from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation'
// import Image from 'next/image'
// import CompanionsList  from '@/components/ui/CompanionsList'
// import { getUserCompanions, getUserSessions } from '@/lib/actions/companion.action'
// const Profile = async () => {
//   const user = await currentUser();
//   if(!user) redirect('/sign-in');

//   const companions = await getUserCompanions(user.id)
//   const sessionHistory = await getUserSessions(user.id)

//   return (
//     <main className='min-lg:w-3/4'>
//       <section className='flex justify-between gap-4 max-sm:flex-col items-center'>
//         <div className='flex gap-4 items-center'>
//           <Image src={user.imageUrl} alt={user.firstName!} width={110} height={110}/>
//           <div className='flex flex-col gap-2'>
//             <h1 className='font-bold text-2xl'>
//               {user.firstName} {user.lastName}
//             </h1>
//             <p className='text-sm text-muted-foreground'>{user.emailAddresses[0].emailAddress}</p>
//           </div>
//         </div>

//         <div className='flex gap-4 '>
//           <div className='border border-black rounded-lg p-3 gap-2 flex flex-col h-fit'>
//             <div className='flex gap-2 items-center'>
//               <Image src="/icons/check.svg" alt="Checkmark" width={22} height={22}/>
//               <p className='text-2xl font-bold'>{sessionHistory.length}</p>
//             </div>
//             <div>Lessons Completed</div>
//           </div>
//           <div className='border border-black rounded-lg p-3 gap-2 flex flex-col h-fit'>
//             <div className='flex gap-2 items-center'>
//               <Image src="/icons/cap.svg" alt="Checkmark" width={22} height={22}/>
//               <p className='text-2xl font-bold'>{companions.length}</p>
//             </div>
//             <div>Companions Created</div>
//           </div>
//         </div>
//       </section>
//       <Accordion type="multiple">
//         <AccordionItem value="recent">
//           <AccordionTrigger className='text-2xl font-bold'>Recent Sessions</AccordionTrigger>
//           <AccordionContent>
//             <CompanionsList title="Recent Sessions" companions={sessionHistory} />
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="companions">
//           <AccordionTrigger className='text-2xl font-bold'>My Companions {`(${companions.length})`}</AccordionTrigger>
//           <AccordionContent>
//             <CompanionsList title="My Companions" companions={companions}  />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>

//     </main>
//   )
// }

// export default Profile

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import CompanionsList from '@/components/ui/CompanionsList'
import { getUserCompanions, getUserSessions } from '@/lib/actions/companion.action'

const Profile = async () => {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  const companions = await getUserCompanions(user.id)
  const sessionHistory = await getUserSessions(user.id)

  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Profile Info */}
        <div className="flex items-center gap-6">
          <Image
            src={user.imageUrl}
            alt={user.firstName!}
            width={100}
            height={100}
            className="rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">{user.emailAddresses[0].emailAddress}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex flex-col justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Image src="/icons/check.svg" alt="Checkmark" width={24} height={24} />
              <p className="text-2xl font-bold text-blue-600">{sessionHistory.length}</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Lessons Completed</p>
          </div>
          <div className="flex flex-col justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <Image src="/icons/cap.svg" alt="Companions" width={24} height={24} />
              <p className="text-2xl font-bold text-green-600">{companions.length}</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Companions Created</p>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section>
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="recent">
            <AccordionTrigger className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">
              Recent Sessions
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <CompanionsList title="Recent Sessions" companions={sessionHistory} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="companions">
            <AccordionTrigger className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">
              My Companions ({companions.length})
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <CompanionsList title="My Companions" companions={companions} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

export default Profile
