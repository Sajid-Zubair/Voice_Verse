import { getAllCompanions } from '@/lib/actions/companion.action';
import CompanionCard from '@/components/ui/CompanionCard';
import { getSubjectColor } from '@/lib/utils';
import SearchInput from '@/components/ui/SearchInput';
import SubjectFilter from '@/components/ui/SubjectFilter';

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject || '';
  const topic = filters.topic || '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-x-hidden">
      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Companion Library</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
