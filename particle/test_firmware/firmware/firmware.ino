int count = 0;

int setCount(String param) {
  Serial.print("Function param: ");
  Serial.println(param);
  count = param.toInt();
}

void setup() {
  Serial.begin(9600);
  Serial.println("Hello world");
  if (Particle.variable("countVar", count)) {
    Serial.println("Registered variable");
  }
  if (Particle.function("setCount", setCount)) {
    Serial.println("Registered function");
  }
}

void loop() {
  delay(5000);
  count = count + 1;
  Serial.println(count);
}
