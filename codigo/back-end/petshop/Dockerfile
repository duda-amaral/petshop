FROM ubuntu:latest AS build
LABEL authors="duda"

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
COPY . .

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:21-jdk-slim

EXPOSE 8080

COPY --from=build target/petshop-0.0.1-SNAPSHOT.jar app.jar
COPY --from=build src/main/resources/application.properties application.properties

ENTRYPOINT ["java", "-jar", "app.jar"]