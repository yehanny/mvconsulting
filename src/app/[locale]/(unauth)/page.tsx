import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Asylum } from '@/templates/Asylum';
import { CTA } from '@/templates/CTA';
import { Hero } from '@/templates/Hero';
import { ImmigrationExpert } from '@/templates/ImmigrationExperts';
import { ImportantNotice } from '@/templates/ImportantNotice';
import { Nationality } from '@/templates/Nationality';
import { Services } from '@/templates/Services';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Hero />
      <Services />
      <ImmigrationExpert />
      <Nationality />
      <Asylum />
      <ImportantNotice />
      <CTA />
    </>
  );
};

export default IndexPage;
