class NotificationSystem{
    send(Message){
        throw new Error("The Send method should implemented in every class");
    }
}
class Email extends NotificationSystem{
    send(){
        console.log(" Received by Email");
    }
}
class SMS extends NotificationSystem{
    send(){
        console.log("Received by SMS");
    }
}
class Whatsapp extends NotificationSystem{
    send(){
        console.log("Received by Whatsapp");
    }
}
const email = new Email();
const sms = new SMS();
const whatsapp = new Whatsapp();
email.send();
sms.send();
whatsapp.send();