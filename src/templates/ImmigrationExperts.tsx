import { useTranslations } from 'next-intl';

import { Section } from '@/features/landing/Section';

export const ImmigrationExpert = () => {
  const t = useTranslations('ImmigrationExpert');

  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
      description={t('section_description')}
    >
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 px-10 py-20 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-bold">
            {t('immigration1_title')}
          </h3>
          <p>
            {t('immigration1_description')}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-bold">
            {t('immigration2_title')}
          </h3>
          <p>
            {t('immigration2_description')}
          </p>
        </div>

      </div>
    </Section>
  );
};
