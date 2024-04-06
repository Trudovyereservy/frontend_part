import { getCoaches } from '@/../actions/actions';
import { PaginatedCoachList } from '@/api/generated/data-contracts'
import { CoachList } from '@/components/CoachCards/CoachList/CoachList';
import { DescriptionPages } from '@/components/DescriptionPages/DescriptionPages';
import { descriptionPages } from '@/utils/constants';

export default async function CoachesPage() {
  const paginatedCoachList: PaginatedCoachList = await getCoaches();

  const { results: coachCards } = paginatedCoachList;

  return (
    <>
      {/* <head>
        <title>Трудовые резервы | Тренерский состав</title>
        <meta name="title" content="Блог" />
      </head> */}
      <DescriptionPages descriptionPages={descriptionPages} />
      <CoachList coachCards={coachCards || []} />
    </>
  );
}
