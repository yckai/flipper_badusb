let badusb = require("badusb");
let layout = "fr-FR";


badusb.setup({
  vid: 0x1234,
  pid: 0x5678,
  mfr_name: "Apple",
  prod_name: "Keyboard",
  layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl"
});
print("Waiting for connection");
while (!badusb.isConnected()) {
  delay(1000);
}

delay(3000);
badusb.press("GUI", "r");
delay(500);
badusb.press("a");
delay(3000);