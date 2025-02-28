import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={(
          <Image
            src="/assets/images/logo-white.png"
            alt="MV Consulting light"
            className=""
            width="190"
            height="70"
          />
        )}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li data-fade>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <li>
          <Link href="/">{t('home')}</Link>
        </li>
        <li>
          <Link href="/about-us">{t('about_us')}</Link>
        </li>

        <li>
          <Link href="/#services">{t('services')}</Link>
        </li>

        {/* <li>
          <Link href="/requests">{t('requests')}</Link>
        </li> */}

        <li>
          <Link href="/contacts">{t('contacts')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
