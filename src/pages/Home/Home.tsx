import { useState } from 'react';
import {
  IonContent,
  IonHeader, IonItem, IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import {getPaySlips, IPaySlip} from "../../data/paySlips";

const Home: React.FC = () => {

  const [paySlips, setPaySlips] = useState<IPaySlip[]>([]);

  const handleGetSlips = (cb?: () => void) => {
    const paySlips = getPaySlips();
    setPaySlips(paySlips);
    if(cb)cb();
  }

  useIonViewWillEnter(() => {
    handleGetSlips();
  });

  const refresh = (e: CustomEvent) => {
    setPaySlips([]);
    handleGetSlips(() => {
      e.detail.complete();
    });
  };

  return (
      <IonPage id="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pay Slips</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={refresh}>
            <IonRefresherContent />
          </IonRefresher>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                Pay Slips
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonList>
            {paySlips.map(({id, fromDate, toDate}) =>
            <IonItem key={id} routerLink={`/pay-slip/${id}`} detail={false}>
              <div slot="start" className="dot dot-unread" />
              <IonLabel className="ion-text-wrap">
                <h2>
                  Date From: {fromDate?.toDateString()}
                  <br />
                  Date To: {toDate?.toDateString()}
                </h2>
              </IonLabel>
            </IonItem>
            )}
          </IonList>
        </IonContent>
      </IonPage>
  );
};

export default Home;
