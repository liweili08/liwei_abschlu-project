FROM openjdk:17

MAINTAINER Liwei Li <liwei.li@rwth-aachen.de>

ADD backend/target/liwei-abschluss-project.jar liwei-abschluss-project.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$URI -jar /liwei-abschluss-project.jar" ]