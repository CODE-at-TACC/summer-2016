#define FIREBASE_SECRET   String("bNAhZxNPH3pCVUDQnf1zbQXRyaiKIjwzYw2Dit9m")
#define INPUT_PIN A2
#define VOLTAGE_LOW_THRESHOLD 1500
#define VOLTAGE_HIGH_THRESHOLD 1900

bool low = true;
String authdata = "{ \"FIREBASE_SECRET\" : \"" + FIREBASE_SECRET + "\" }";

void takeReading() {
  int value = analogRead(INPUT_PIN);
  Serial.print("Analog pin value: ");
  Serial.println(value);
  if (low && value > VOLTAGE_LOW_THRESHOLD) {
    low = false;
    Particle.publish("dark", authdata);
  } else {
    if (!low && value < VOLTAGE_LOW_THRESHOLD) {
      low = true;
      Particle.publish("lit", authdata);
      delay(1000);
    }
  }
  delay(10);
}

void setup() {
  Serial.begin(115200);
  Serial.println("Hello world!");
  pinMode(INPUT_PIN, INPUT);
}

void loop() {
  takeReading();
}
