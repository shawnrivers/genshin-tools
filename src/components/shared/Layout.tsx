import { joinClassNames } from 'app/utils/classNames';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type Link = 'languages';

export const Layout: React.FC<{
  title?: string;
  heading: string;
  activeLink?: Link;
  children: React.ReactNode | React.ReactNode[];
}> = props => {
  return (
    <div className="p-4">
      <Head>
        <title>
          {props.title ? `${props.title} - Genshin Tools` : 'Genshin Tools'}
        </title>
      </Head>
      <nav className="flex items-center justify-center space-x-4">
        <Link href="/languages">
          <a
            className={joinClassNames(
              'text-lg underline',
              props.activeLink === 'languages' ? 'text-indigo-600' : undefined,
            )}
          >
            Languages
          </a>
        </Link>
      </nav>
      <main className="mt-4">
        <h1 className="text-center text-4xl font-bold">{props.heading}</h1>
        {props.children}
      </main>
    </div>
  );
};
