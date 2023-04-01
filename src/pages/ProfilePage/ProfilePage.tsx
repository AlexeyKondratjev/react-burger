import React, { FC } from 'react';
import styles from './ProfilePage.module.css';
import commonStyles from '../commonStyles.module.css';
import { Navigation } from '../../components/Navigation/Navigation';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';


export const ProfilePage: FC = () => {
  return (
    <main className={commonStyles.main}>
      <div className={styles.container}>
        <Navigation />

        <div className={styles.profileContainer}>
          <ProfileForm />
        </div>
      </div>
    </main>
  );
}
