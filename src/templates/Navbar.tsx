'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { InView } from 'react-intersection-observer';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <InView>
        {({ ref, inView }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <CenteredMenu
              logo={(
                <Image
                  src="/assets/images/logo-white.png"
                  alt="MV Consulting"
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
          </motion.div>
        )}
      </InView>
    </Section>
  );
};
