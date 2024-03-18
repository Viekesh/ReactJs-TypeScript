import React from 'react';
import './LandPage.scss';
import EEENav from './Components/EEENav';
import Para from './Components/Para';
import EEEHeading from './Components/EEEHeading';
import QnA from './Components/QnA';
import Footer from './Pages/Footer';


const LandPage = () => {
  return (
    <div className="landing_page">
      <header>
        <EEENav />
      </header>
      <main>
        <div className="wlcm_note">
          <h4>
            <span className="span1">WE PROVIDE</span>
            <br />
            <span className="span2">ELECTRICAL INSTALLATION SERVICES</span>
          </h4>
          <Para para="OUR PRIMARY FOCUS IS TO PROVIDE SERVICES IN RESIDENTIAL SECTOR. WE WORKED ONLY IN EMERGENCY." />
        </div>
      </main>
      
      <section className="section_three">
        <EEEHeading heading="ANY DOUBTS" />
        <QnA
          question="how many classes are you held in a week and how you structure it?"
          answer="There will be 2 classes in a week either on weekdays or on weekends,
      as per the selection of batch. we have batches running on both weekdays and weekends."
        />
        <QnA
          question="is it necessary to have a guitar from the first class itself?"
          answer="it is necessary to have a guitar from the first class itself so that you can complete all the
        lessons step by step comfortably. if you do not have guitar, then do not rush to take admission,
        first buy a guitar and then take admission as learning guitar is impossible without having it."
        />
        <QnA
          question="i am confused, i don't know which course i should do?"
          answer="dont't worry about it just let us know by contacting us and we will schedule a free
        counselling session for you in which our teacher will recommend the best course for you."
        />
        <QnA
          question="can i get the recordings of the classes in case i am absent?"
          answer="no, you want get the recordings but you will get the regular notes through the whatsapp group, by which
        you can practice. also before starting a new topic your teacher gives a brief recap of previously taught topic."
        />
        <QnA
          question="if i have a doubt after a class, whom should i approach?"
          answer="after your admission, you will be added to the official whatsapp group where
          you can ask all the doubts and queries."
        />
        <QnA
          question="i have heard from many people that learning guitar is very difficult, is it true?"
          answer="these are all just rumours. practice guitar everyday for one hour with consistency, dedication and discipline
        and see how you will start playing guitar with time!!! frankly speaking it takes at least one year of practice to become a good guitarist, 
        so keep practicing everyday."
        />
        <QnA
          question="in which language will the classes will held?"
          answer="hindi, english and marathi."
        />
      </section>
      <Footer />
    </div>
  );
};

export default LandPage;