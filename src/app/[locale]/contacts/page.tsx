import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Section } from '@/features/landing/Section';
import ContactsForm from '@/templates/ContactForm';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'ContactUs',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export const dynamic = 'force-dynamic';

const GoogleMap = () => {
  return (
    <iframe
      className="rounded-lg"
      title="Google Map"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.6243368427452!2d-81.40629423835837!3d28.292697526257705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd85a98ee4b823%3A0x18699bf8cf86af34!2sMV%20CONSULTING%20LLC!5e0!3m2!1sen!2sve!4v1745330493749!5m2!1sen!2sve"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

const ContactsPage = (props: { params: { locale: string } }) => {
  const t = useTranslations('ContactUs');
  unstable_setRequestLocale(props.params.locale);
  return (
    <>
      <Section
        className="py-36"
        backgroundImage="/assets/images/contacts-background.webp"
        title={t('section_title')}
        subtitle={t('section_subtitle')}
        description={t('section_description')}
      />
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 items-center gap-4 p-4 md:grid-cols-2">
          <div className="p-4">
            <Image width={380} height={640} src="/assets/images/mariceli1.webp" alt="About Us" className="min-w-full rounded-2xl sm:min-w-min" />
          </div>
          <div className="p-4">
            <ContactsForm />
          </div>
        </div>
        <div>
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
