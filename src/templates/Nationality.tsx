import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { Section } from '@/features/landing/Section';

export const Nationality = () => {
  const t = useTranslations('Nationality');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 px-10 py-20 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image className="rounded-2xl" src="/assets/images/services/citizen-forms.webp" alt="citizens" width={300} height={300} />
            <h3 className="text-2xl font-bold">
              {t('nationality1_title')}
            </h3>
            <p>
              {t('nationality1_description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image className="rounded-2xl" src="/assets/images/services/nationality.webp" alt="nationality" width={300} height={300} />
            <h3 className="text-2xl font-bold">
              {t('nationality2_title')}
            </h3>
            <p>
              {t('nationality2_description')}
            </p>
          </div>
        </div>
      </Section>
    </Background>
  );
};
