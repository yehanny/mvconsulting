import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { Section } from '@/features/landing/Section';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'TaxSeason',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const TaxSeasonPage = (props: { params: { locale: string } }) => {
  const t = useTranslations('TaxSeason');
  unstable_setRequestLocale(props.params.locale);
  return (
    <Section
      id="tax-season"
      subtitle={t('section_subtitle')}
      title={t('section_title')}
    >
      <p className="">
        {t('section_description')}
      </p>
      <p className="mt-5 whitespace-pre-line">
        {t('section_description2')}
      </p>
      <p className="mt-5 whitespace-pre-line">
        {t('section_description3')}
      </p>
    </Section>
  );
};

export default TaxSeasonPage;
