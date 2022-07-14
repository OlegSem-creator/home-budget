import { FC } from "react";

import PagesWrapper from "../../components/pagesCommonContent/PagesWrapper";
import Header from "../../components/pagesCommonContent/Header";
import LinkToLoginForm from "../../components/pagesCommonContent/LinkToLoginForm";
import LinkToRegistrationForm from "../../components/pagesCommonContent/LinkToRegistrationForm";
import Container from "../../components/pagesCommonContent/Container";
import Footer from "../../components/pagesCommonContent/Footer";

import styles from "./styles.module.scss";

const Home: FC = () => {
  return (
    <PagesWrapper>
      <Header>
        <LinkToLoginForm />
        <LinkToRegistrationForm />
      </Header>

      <div className={styles.main}>
        <Container>
          <div className={styles.mainWrapper}>
            <div className={styles.mainTextContent}>
              <h1 className={styles.mainTitle}>
                Have control of your Home budget
              </h1>

              <p className={styles.mainText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto dolore perferendis officiis distinctio amet quod
                asperiores commodi alias adipisci! Placeat laborum fugiat
                dignissimos modi aut, id eveniet quam excepturi commodi!
              </p>
            </div>

            <div className={styles.mainImg}>
              <img src={require("../../assets/images/home.png")} alt="page" />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </PagesWrapper>
  );
};

export default Home;
