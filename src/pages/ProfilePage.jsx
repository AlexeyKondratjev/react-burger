import React from 'react';
import styles from './ProfilePage.module.css';
import commonStyles from './commonStyles.module.css';
import { Navigation } from '../components/Navigation/Navigation';
import { ProfileForm } from '../components/ProfileForm/ProfileForm';


export function ProfilePage() {
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
