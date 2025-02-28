import Image from 'next/image';

export const ServiceCard = (props: {
  image: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <Image src={props.image} width={300} height={150} className="w-full" alt="" />

    <div className="mt-2 text-lg font-bold">{props.title}</div>

    <div className="my-3 w-8 border-t border-[#98BAC3]" />

    <div className="mt-2 text-muted-foreground">{props.children}</div>
  </div>
);
