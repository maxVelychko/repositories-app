import React, { FC, Fragment, useState, ChangeEvent } from 'react';

import HomeProps from './types';
import styles from './Home.module.scss';

const Home: FC<HomeProps> = ({
  repositories,
  searchParamValue,
  history,
}) => {
  const [searchValue, setSearchValue] = useState(searchParamValue || '');

  const handleChange = (e: ChangeEvent<any>) => {
    const value = e.target.value;
    setSearchValue(value);
    history.replace(`?q=${value}`);
  };

  return (
    <Fragment>
      <h3>Home</h3>
      <input
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search by owner name"
      />
      <ul>
        {repositories.map(item => {
          const { name, owner, languages } = item;
          const key = name + owner;
          return (
            <li key={key} className={styles.repositoryItem}>
              <h3 className={styles.nameText}>{name}</h3>
              <span className={styles.ownerText}>{owner}</span>
              <div className={styles.languagesWrapper}>
                {languages.map(language => (
                  <span className={styles.languageText} key={key + language}>
                    {language}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
 
export default Home;
