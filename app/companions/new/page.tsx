import CompanionForm from "@/components/ui/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.action";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        // <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
        //     {canCreateCompanion ? (
        //         <article className="w-full gap-4 flex flex-col">
        //             <h1>Companion Builder</h1>
        //             <CompanionForm />
        //         </article>
        //         ) : (
        //             <article className="companion-limit">
        //                 <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
        //                 <div className="cta-badge">
        //                     Upgrade your plan
        //                 </div>
        //                 <h1>You’ve Reached Your Limit</h1>
        //                 <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
        //                 <Link href="/subscription" className="btn-primary w-full justify-center" >
        //                     Upgrade My Plan
        //                 </Link>
        //             </article>
        //         )}
        // </main>
        <main className="flex flex-col items-center justify-center px-4 py-8
  sm:px-6 sm:py-10
  md:px-8 md:py-12
  lg:px-12 lg:py-16
  mx-auto
  max-w-full
  min-h-screen
">
  {canCreateCompanion ? (
    <article className="w-full max-w-4xl flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center">Companion Builder</h1>
      <CompanionForm />
    </article>
  ) : (
    <article className="w-full max-w-md flex flex-col items-center gap-6 text-center px-6">
      <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
      <div className="bg-blue-600 text-white rounded-full px-4 py-2 font-semibold tracking-wide">
        Upgrade your plan
      </div>
      <h1 className="text-2xl font-bold">You’ve Reached Your Limit</h1>
      <p className="text-gray-600 max-w-sm">
        You’ve reached your companion limit. Upgrade to create more companions and premium features.
      </p>
      <Link
        href="/subscription"
        className="btn-primary w-full max-w-xs justify-center"
      >
        Upgrade My Plan
      </Link>
    </article>
  )}
</main>

    )
}

export default NewCompanion