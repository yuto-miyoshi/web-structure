FROM openjdk:17-oracle

WORKDIR /backend
COPY /build/libs/backend-0.0.1-SNAPSHOT.jar .jar

# WORKDIR /backend
# COPY . .

# RUN microdnf install findutils
# RUN ./gradlew init
# RUN ./gradlew build

# WORKDIR /backend/libs/

ENTRYPOINT ["java", "-jar", ".jar"]