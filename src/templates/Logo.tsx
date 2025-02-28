import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/assets/images/logo-white.png"
      alt="MV Consulting light"
      className=""
      width="128"
      height="37"
    />
  );
};
