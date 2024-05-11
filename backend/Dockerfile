FROM openjdk:17-oracle

# はじめからJARファイルがある場合
# WORKDIR /backend
# COPY /build/libs/backend-0.0.1-SNAPSHOT.jar backend-0.0.1-SNAPSHOT.jar

# JARファイルも作る場合
WORKDIR /backend
COPY . .

RUN microdnf install findutils
RUN ./gradlew init
RUN ./gradlew build

WORKDIR /backend/build/libs/

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]