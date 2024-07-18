import { useState } from 'react';
import {
    IonBackButton, IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';

import { useParams } from 'react-router';
import './PaySlip.css';
import { getPaySlipById, IPaySlip } from "../../data/paySlips";
import { Browser } from "@capacitor/browser";

function PaySlip() {
    const handleDownloadSlip = async (slipLink: string | undefined) => {
        if(!slipLink) return;
        await Browser.open({ url: slipLink });
    }

    const [paySlip, setPaySlip] = useState<IPaySlip>();
    const params = useParams<{ id: string }>();

    useIonViewWillEnter(() => {
        const slipId = params.id;

        const slip = getPaySlipById(slipId);
        setPaySlip(slip);
    });

    return (
        <IonPage id="view-message-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Pay slip" defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {paySlip ? (
                    <>
                        <IonItem>
                            <IonLabel className="ion-text-wrap ion-text-center">
                                PaySlip ID: {paySlip.id?.toUpperCase()}
                            </IonLabel>
                        </IonItem>
                        <IonImg
                            src={paySlip.file}
                            alt={paySlip.id}
                        />
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                 <span className="date">
                                    <IonNote slot="start" color="dark"><span className="ion-bold-text">Start Date:</span></IonNote>
                                    <IonNote slot="start" color="dark"><span className="ion-bold-text">{paySlip.fromDate.toDateString()}</span></IonNote>
                                 </span>
                                </h2>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel className="ion-text-wrap">
                                <h2>
                                 <span className="date">
                                    <IonNote slot="start" color="dark"><span className="ion-bold-text">End Date:</span></IonNote>
                                    <IonNote slot="start" color="dark"><span className="ion-bold-text">{paySlip.toDate.toDateString()}</span></IonNote>
                                 </span>
                                </h2>
                            </IonLabel>
                        </IonItem>

                        <div className="ion-text-center ion-padding-top"><IonButton size="large" onClick={() => handleDownloadSlip(paySlip?.file)}>Download Slip</IonButton></div>
                    </>
                ) : (
                    <div>Pay slip not found</div>
                )}
            </IonContent>
        </IonPage>
    );
}

export default PaySlip;
