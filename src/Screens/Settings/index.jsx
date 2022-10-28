import React from 'react';
import { NavigationContainer } from '../../Components';
import { useTranslation } from 'react-i18next';
import { Button } from '../../Components';


const lngs = {
  en: { nativeName: 'English'},
  fi: { nativeName: 'Suomi'}
};

const Settings = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className='Container'>
      <NavigationContainer>
        <h1>{t('settings')}</h1><br></br>
        <div>
          {Object.keys(lngs).map((lng) =>(
            <Button 
              text={lng}
              type='submit' 
              key={lng} 
              onClick={() => i18n.changeLanguage(lng)} 
              disabled={i18n.resolvedLanguage === lng}
              width={200}
              height={50}
            >
              {lngs[lng].nativeName}
            </Button>
          ))}
        </div>
      </NavigationContainer>;
    </div>
  )
};

export default Settings;
