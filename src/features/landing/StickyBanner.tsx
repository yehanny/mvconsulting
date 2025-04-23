export const StickyBanner = (props: { children: React.ReactNode }) => (
  <div className="z-50 bg-primary p-4 text-center text-sm font-semibold uppercase text-primary-foreground [&_a:hover]:text-indigo-500 [&_a]:text-yellow-200">
    {props.children}
  </div>
);
