import { Keyboard, type KeyboardProps } from 'app/components/shared/Keyboard';
import { Layout } from 'app/components/shared/Layout';
import { joinClassNames } from 'app/utils/classNames';
import {
  getLanguageFont,
  isDefinedLanguage,
  Language,
  LANGUAGES,
} from 'app/utils/languages';
import { NextPageWithLayout } from 'app/utils/types';
import React, { useCallback, useState } from 'react';

const LanguagesPage: NextPageWithLayout = () => {
  const [language, setLanguage] = useState<Language>('teyvat');
  const [text, setText] = useState('');

  const handleChangeLanguage = useCallback<
    React.ChangeEventHandler<HTMLSelectElement>
  >(e => {
    const _language = e.target.value;
    if (!isDefinedLanguage(_language)) return;
    setLanguage(_language);
  }, []);

  const handleClickKeyboard = useCallback<KeyboardProps['onClick']>(
    key => {
      if (key === undefined) return;

      if (/[a-z,.]/.test(key)) {
        setText(text.concat(key));
      }

      if (key === 'Backspace') {
        setText(text.slice(0, -1));
      }
    },
    [text],
  );

  return (
    <>
      <div className="box-border flex flex-col items-center">
        <label className="mt-8 flex flex-col items-center space-y-2">
          <div className="text-lg font-semibold">Select a language</div>
          <select
            value={language}
            className="rounded border-2 border-zinc-400 px-2 py-1"
            onChange={handleChangeLanguage}
          >
            {LANGUAGES.map(languageOption => (
              <option key={languageOption} value={languageOption}>
                {languageOption}
              </option>
            ))}
          </select>
        </label>
        <div className="my-4 flex flex-col items-center space-y-2">
          <div className="text-lg font-semibold">Input Result</div>
          <div className="mt-2 box-content h-16 rounded-lg bg-zinc-200 px-4 py-2 text-center text-zinc-800">
            <div className="mb-1 font-sans text-zinc-500">{text}</div>
            <div
              className={joinClassNames(
                'text-2xl text-zinc-800',
                getLanguageFont(language),
              )}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 mx-auto w-full max-w-3xl p-2 opacity-100">
        <Keyboard
          language={language}
          onClick={handleClickKeyboard}
          className="rounded-lg bg-zinc-800/70 p-4 shadow-xl backdrop-blur-sm sm:p-6"
        />
      </div>
    </>
  );
};

export default LanguagesPage;

LanguagesPage.getLayout = page => {
  return (
    <Layout title="Languages" heading="Languages" activeLink="languages">
      {page}
    </Layout>
  );
};
