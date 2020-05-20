import React, { FC, Fragment, useState, ChangeEvent } from 'react';

import OwnersProps from './types';
import styles from './Owners.module.scss';

const initialSelectValue = 'All';

const Owners: FC<OwnersProps> = ({
  repositories,
  languages,
  languageParamValue,
  history,
}) => {
  const [languageValue, setLanguageValue] = useState(languageParamValue || initialSelectValue);

  const handleChange = (e: ChangeEvent<any>) => {
    let value = e.target.value;
    setLanguageValue(value);
    const routePath = `?language=${value === initialSelectValue ? '' : value}`;
    history.replace(routePath);
  };

  return (
    <Fragment>
      <h3>Owners</h3>
      <select
        className={styles.selectInput}
        value={languageValue}
        onChange={handleChange}
      >
        <option key={initialSelectValue}>{initialSelectValue}</option>
        {languages.map(item => <option key={item}>{item}</option>)}
      </select>
      <ul>
        {repositories.map((item, index) => {
          const { name, owner, languages } = item;
          const key = name + owner;
          const prevOwner = repositories[index-1] && repositories[index-1].owner;
          return (
            <li key={key}>
              {(prevOwner !== owner) && (
                <h3 className={styles.ownerText}>{owner}</h3>
              )}
              <div className={styles.repositoryItem}>
                <span className={styles.nameText}>{name}</span>
                <div className={styles.languagesWrapper}>
                  {languages.map(language => (
                    <span className={styles.languageText} key={key + language}>
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
 
export default Owners;
