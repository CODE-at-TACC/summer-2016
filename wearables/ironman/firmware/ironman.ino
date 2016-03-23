#define FIREBASE_SECRET   String("YOUR_FIREBASE_SECRET_HERE")
#define INPUT_PIN A2
#define VOLTAGE_LOW_THRESHOLD 200
#define VOLTAGE_HIGH_THRESHOLD 500

bool low = true;
String authdata = "{ \"FIREBASE_SECRET\" : \"" + FIREBASE_SECRET + "\" }";

void takeReading() {
  int value = analogRead(INPUT_PIN);
  Serial.print("Analog pin value: ");
  Serial.println(value);
  if (low && value > VOLTAGE_LOW_THRESHOLD) {
    low = false;
    Particle.publish("lit", authdata);
  } else {
    if (!low && value < VOLTAGE_LOW_THRESHOLD) {
      low = true;
      Particle.publish("dark", authdata);
    }
  }
  delay(1000);
}

void setup() {
  Serial.begin(115200);
  Serial.println("Hello world!");
  pinMode(INPUT_PIN, INPUT);
}

void loop() {
  takeReading();
}
