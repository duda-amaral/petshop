FROM ubuntu:latest AS build
LABEL authors="duda"

RUN apt-get update && apt-get install openjdk-17-jdk maven -y

WORKDIR /petshop/codigo/back-end/petshop

COPY . .

RUN mvn clean install

FROM openjdk:21-jdk-slim

EXPOSE 8080

COPY --from=build /petshop/codigo/back-end/petshop/target/petshop-0.0.1-SNAPSHOT.jar app.jar
COPY --from=build /petshop/codigo/back-end/petshop/src/main/resources/application.properties application.properties

ENTRYPOINT ["java", "-jar", "app.jar"]
