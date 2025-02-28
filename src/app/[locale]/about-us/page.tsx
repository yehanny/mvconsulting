import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { Section } from '@/features/landing/Section';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'AboutUs',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export const dynamic = 'force-dynamic';

const AboutUs = (props: { params: { locale: string } }) => {
  const t = useTranslations('AboutUs');
  unstable_setRequestLocale(props.params.locale);
  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
    >
      <div className="mb-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
        <Image width={300} height={500} src="/assets/images/mariceli.webp" alt="About Us" className="min-w-full rounded-2xl sm:min-w-min" />
        <p className="whitespace-pre-line">
          {t('section_description')}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-xl p-10 shadow-xl sm:grid-cols-2">
        <div>
          <h3 className="mb-5 text-lg font-bold">{ t('mission')}</h3>
          <p className="whitespace-pre-line">
            {t('section_description2')}
          </p>
        </div>
        <p className="whitespace-pre-line">
          <h3 className="mb-5 text-lg font-bold">{ t('vision')}</h3>
          {t('section_description3')}
        </p>
      </div>
    </Section>
  );
};

export default AboutUs;
