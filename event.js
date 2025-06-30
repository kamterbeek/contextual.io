msg.alert = false;

if (msg.payload.hasOwnProperty("temperature")) {
  if (msg.payload.temperature <= 0) {
    msg.alert = true;
    msg.alertType = "LOW_TEMP";
    msg.alertDescription = `Low temperature alert (${msg.payload.temperature} for Boulder Garden)`
  } else if (msg.payload.temperature >= 27) {
    msg.alert = true;
    msg.alertType = "HIGH_TEMP";
    msg.alertDescription = `High temperature alert (${msg.payload.temperature} for Boulder Garden)`
  }
}
return msg;
