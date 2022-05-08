import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import me from "../../assets/photos/me.jpg";
export default function WahtasApp() {
  return (
    <WhatsAppWidget
      phoneNo="0989337039971"
      position="right"
      widgetWidth="350px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt=""
      iconSize="50"
      iconColor="white"
      iconBgColor="#124327"
      headerIcon=""
      headerIconColor="#124327"
      headerTxtColor="white"
      headerBgColor="#124327"
      headerTitle="Mohsen_09337039971"
      headerCaption="Online"
      bodyBgColor="#999999"
      chatPersonName="Mohsen Rahmi"
      chatMessage={
        <>
          سلام <br />
          <br /> چطوری میتونم کمکت کنم ؟
        </>
      }
      footerBgColor="#999"
      btnBgColor="#124327"
      btnTxtColor="white"
      btnTxt="شروع چت"
    />
  );
}
