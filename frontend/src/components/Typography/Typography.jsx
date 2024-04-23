/* eslint-disable react/prop-types */

export function TypographyH1({ children, className }) {
  return (
    <h1
      className={`scroll-m-20 text-4xl tracking-tight lg:text-5xl ${className} `}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }) {
  return (
    <h3 className={`scroll-m-20 text-2xl tracking-tight  ${className}  `}>
      {children}
    </h3>
  );
}
