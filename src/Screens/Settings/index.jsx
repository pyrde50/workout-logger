import React from 'react';
import { CustomDropdownPicker, NavigationContainer } from '../../Components';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Components';

const lngs = {
  en: { nativeName: 'English' },
  fi: { nativeName: 'Suomi' },
};

const Settings = () => {
  const picker = [
    { id: 0, value: 'fi' },
    { id: 1, value: 'en' },
  ];

  const changeLang = (_index, value) => {
    i18n.changeLanguage(value);
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="Container">
      <NavigationContainer>
        <div className="Settings">
          <h1>{t('settings')}</h1>
          <br></br>
          <h2>{t('language')}</h2>
          <div>
            <CustomDropdownPicker
              value={i18n.language}
              setValue={changeLang}
              index={0}
              items={picker}
              backgroundColor={'white'}
            />
          </div>
        </div>
      </NavigationContainer>
      ;
    </div>
  );
};

export default Settings;
