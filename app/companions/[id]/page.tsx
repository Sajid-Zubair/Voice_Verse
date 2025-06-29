// import {getCompanion} from "@/lib/actions/companion.action";
// import {currentUser} from "@clerk/nextjs/server";
// import {redirect} from "next/navigation";
// import {getSubjectColor} from "@/lib/utils";
// import Image from "next/image";
// import CompanionComponent from "@/components/ui/CompanionComponent";

// interface CompanionSessionPageProps {
//     params: Promise<{ id: string}>;
// }

// const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
//     const { id } = await params;
//     const companion = await getCompanion(id);
//     const user = await currentUser();

//     const { name, subject, title, topic, duration } = companion;

//     if(!user) redirect('/sign-in');
//     if(!name) redirect('/companions')

//     return (
//         <main>
//             <article className="flex rounded-border justify-between p-6 max-md:flex-col">
//                 <div className="flex items-center gap-2">
//                     <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject)}}>
//                         <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
//                     </div>

//                     <div className="flex flex-col gap-2">
//                         <div className="flex items-center gap-2">
//                             <p className="font-bold text-2xl">
//                                 {name}
//                             </p>
//                             <div className="subject-badge max-sm:hidden">
//                                 {subject}
//                             </div>
//                         </div>
//                         <p className="text-lg">{topic}</p>
//                     </div>
//                 </div>
//                 <div className="items-start text-2xl max-md:hidden">
//                     {duration} minutes
//                 </div>
//             </article>

//             <CompanionComponent
//                 {...companion}
//                 companionId={id}
//                 userName={user.firstName!}
//                 userImage={user.imageUrl!}
//             />
//         </main>
//     )
// }

// export default CompanionSession

import { getCompanion } from "@/lib/actions/companion.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/ui/CompanionComponent";

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  const { name, subject, topic, duration } = companion;

  if (!user) redirect("/sign-in");
  if (!name) redirect("/companions");

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Header */}
      <article className="flex flex-col md:flex-row justify-between items-start gap-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border dark:border-slate-700">
        {/* Left */}
        <div className="flex items-start gap-4 w-full md:w-auto">
          {/* Icon */}
          <div
            className="min-w-[72px] h-[72px] flex items-center justify-center rounded-lg hidden md:flex"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={subject}
              width={35}
              height={35}
            />
          </div>

          {/* Text Info */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {name}
              </h1>
              <span
                className="px-3 py-1 text-sm font-medium rounded-full text-white"
                style={{ backgroundColor: getSubjectColor(subject) }}
              >
                {subject}
              </span>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-300">
              {topic}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="text-xl font-medium text-slate-700 dark:text-slate-200 self-start md:self-center">
          ⏱️ {duration} minutes
        </div>
      </article>

      {/* Main Companion Component */}
      <section className="w-full">
        <CompanionComponent
          {...companion}
          companionId={id}
          userName={user.firstName!}
          userImage={user.imageUrl!}
        />
      </section>
    </main>
  );
};

export default CompanionSession;
