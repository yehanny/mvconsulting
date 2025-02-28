import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { Section } from '@/features/landing/Section';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'PrivacyPolicy',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const PrivacyPolicy = (props: { params: { locale: string } }) => {
  const t = useTranslations('PrivacyPolicy');
  unstable_setRequestLocale(props.params.locale);
  return (
    <Section
      subtitle={t('section_subtitle')}
      title={t('section_title')}
    >
      <p className="whitespace-pre-line">
        {t('section_description')}
      </p>
    </Section>
  );
};

export default PrivacyPolicy;
