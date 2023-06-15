import Card from '../Card/Card';
import styles from './Topics.module.css';

const Topics = () => {
  return (
    <div className={styles.topics}>
      <h2>
        &quot;<span>24</span>&quot; Web Topics Found
      </h2>

      <div className={styles.cards}>
        <Card
          id="1"
          image="./assets/ci-cd.jpeg"
          preTitle="Web Development Languages"
          title="Continuous Integration/Continuous Deployment"
          author="Sarah Smith"
        />
      </div>
    </div>
  );
};

export default Topics;
