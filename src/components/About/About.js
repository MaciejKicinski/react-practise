import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle'

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle header="About"/>
    </div>
  );
};

export default About;
