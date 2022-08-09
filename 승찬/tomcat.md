# 1. 다운로드

http://archive.apache.org/dist/tomcat/tomcat-8/ 사이트에서 최신 버전을 확인하고 다운로드합니다.

```
[hgko@localhost ~]$ cd /home/download
[hgko@localhost download]$ wget http://archive.apache.org/dist/tomcat/tomcat-8/v8.5.59/bin/apache-tomcat-8.5.59.tar.gz
```

오프라인 환경에서는 Tomcat 8 Download 사이트 접속해서 tar.gz 파일을 직접 다운로드 후 서버에 전송합니다.

# 2. 설치

먼저 tar 명령어를 사용하여 압축을 풀어 줍니다. 압축이 풀리면 모든 사용자가 사용하고 관리가 편리하도록 Root 계정으로 접속 후 해당 폴더로 이동 시켜줍니다.

# 압축 해제

```
[hgko@localhost download]$ tar zxvf apache-tomcat-8.5.59.tar.gz
```

# 폴더 이동

```
[hgko@localhost download]$ sudo su
[root@localhost download]$ mv /home/download/apache-tomcat-8.5.59 /usr/local/lib 3. 환경 설정
[root@localhost ~]$ vi /etc/profile
CATALINA_HOME=/usr/local/lib/apache-tomcat-8.5.59
```

Tomcat 설정 부분(CATALINA)만 수정하면 됩니다. 설정이 완료되면 반영합니다.

# 설정 반영

[root@localhost ~]$ source /etc/profile

# 설정 확인

[root@localhost ~]$ echo $CATALINA_HOME 4. 방화벽 설정
현재 톰캣 포트가 8080이기 때문에 8080 포트에 대한 방화벽을 설정합니다.

```
[root@localhost ~]$ firewall-cmd --permanent --zone=public --add-port=8080/tcp
[root@localhost ~]$ firewall-cmd --reload 5. 실행 및 중지
[root@localhost ~]$ cd /usr/local/lib/apache-tomcat-8.5.59/bin
```

# 실행

```
[root@localhost bin]$ ./startup.sh
```

# 중지

```
[root@localhost bin]$ ./shutdown.sh 6. 실행 확인
```

http://localhost(ip 주소):8080 에 접속해서 확인합니다.

```
[root@localhost bin]$ tail -f /usr/local/lib/apache-tomcat-8.5.59/logs/catalina.out
```

tail 명령어를 사용하여 로그 내용을 출력해서 진행 상태를 파악할 수 있습니다.

---

url

/usr/local/lib/apache-tomcat-9.0.65

java install

https://veneas.tistory.com/entry/Linux-CentOS7-%EC%9B%90%ED%95%98%EB%8A%94-%ED%8A%B9%EC%A0%95-%EB%B2%84%EC%A0%84-Javajdk-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-wget

export JAVA_HOME=/usr/lib/jdk-11.0.16
export PATH=$PATH:$JAVA_HOME/bin    
export CLASSPATH=.:$JAVA_HOME/lib/tools.jar
CATALINA_HOME=/usr/local/lib/apache-tomcat-9.0.65

sudo update-alternatives --install "/usr/bin/java" "java" "/usr/local/java/jdk-11.0.16/bin/java" 1;
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/local/java/jdk-11.0.16/bin/javac" 1;
sudo update-alternatives --install "/usr/bin/javaws" "javaws" "/usr/local/java/jdk-11.0.16/bin/javaws" 1;

/usr/local/java/jdk-11.0.16/bin/java

sudo update-alternatives --set java /usr/local/java/jdk-11.0.16/bin/java;
sudo update-alternatives --set javac /usr/local/java/jdk-11.0.16/bin/javac;
sudo update-alternatives --set javaws /usr/local/java/jdk-11.0.16/bin/javaws;
