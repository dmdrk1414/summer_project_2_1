# summer_project_2_1

박승찬, 김다경, 조성무

학생들이 만드는 미니 프로젝트

# Front-End Development

## 사용언어

    javaScript, HTML, SCSS, TypeScript

---

## 사용 FrameWork

### React을 사용하는 이유

1.  선언적 (Declarative)이다 <br>
    리액트는 대화형 UI를 작성하기에 유리하다. <br>
    데이터가 변경되었을 때 효율적으로 렌더링을 수행할 수 있도록 한다. <br>
    컴포넌트 기반(Component-based)이다<br>
2.  캡슐화된 컴포넌트가 스스로 상태를 관리하고 복잡한 UI도 효과적으로 구성할 수 있음 <br>
    한 번 배워서 어디에서나 사용하기(Learn Once, Write Anywhere)<br>
3.  기존 소스를 불필요하게 다시 작성하지 않고 새 기능을 개발 할 수 있다. <br>Node서버에서 랜더링을 할 수도 있고, <br>온라인 웹에서도 사용 가능하다. <br>RN(React Native)을 쓰면 모바일 앱도 만들 수 있다.
4.  나중에 모바일 앱에서도 자연스러운 페이지 이동이 가능하며 <br> 우리의 페이지에 방향성에 (새로고침형 이동xx) 맞다고 생각하여 react을 선택
5.  react가 무거워서 로딩시간이 길다는 단점이 있다고합나다<br> 하지만 이번 프로젝트에서의 크기는 무리가 없다고 생각하여 선택

                React

https://ko.reactjs.org/

https://velog.io/@jeromecheon/React%EB%9E%80-%ED%8A%B9%EC%A7%95%EA%B3%BC-%EC%9E%A5%EB%8B%A8%EC%A0%90-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0

---

## 사용 라이브러리

1. 계발환경에서 동적인 웹화면을 구축하기 위해 Bootstrap, React-Bootstrap SCSS 라이브러리를 활용

2. scrollmagic을 이용하여 스크롤 이동시 역동적인 효과 연출 (사용 여부 확인)

3. fetch 라이브러리을 이용하여 서버 통신의 파이프 라인 구축 -> 초기에 임시 api 을 활용하여 구축

   Bootstrap, React-Bootstrap, fetch, scrollmagic

https://getbootstrap.kr/ //Bootstrap

https://react-bootstrap.github.io/ //React-Bootstrap

https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch //fetch

https://scrollmagic.io/ // scrollmagic

---

## js 사용규칙

1. ESLint(airbnb style), 표준 Javascript 코드 작성규칙을 엄격히 지켜, 향후 유지보수및 재활용성 증가하기위한 규칙

```
   ESLint(airbnb style), 표준 Javascript 코드 작성규칙
```

https://jeonghakhur.gitbooks.io/frontend-coding-convention/content/javascript/ // eslint

https://jeonghakhur.gitbooks.io/frontend-coding-convention/content/javascript/ // 작성규칙

--

## IDE

    vscode, vim

---

# back-End Development

## 사용 언어

### java을 사용하는 이유

1.  Java는 이식성이 높다, 우분투와, 윈도우의 환경을 같이쓰는 입장에서 JVM(Java Virtual Machine)<br>을 이용한 운영체제에 독립하여 작성을 하기위하여 선택
2.  객체 지향 프로그래밍 향후 유지보수성의 유무와, 수정, 추가를 위하여 java 선택
3.  네트워크 프로그래밍 용도로 개발 되었기에 API들이 제공(정확하게는 찾아볼생각)
4.  엄격한 구조 엄격한 타입 체킹을 지원하여 프로그램 실행시 에러 찾기 쉽다.

```
    java(11.0.15)
```

## 사용 FrameWork

1. 라이브러리 관리 자동화.
   스프링부트의 Starter  라이브러리를 등록해서 라이브러리 의존성을 간단히 관리할 수 있다.
2. 스프링 부트는 pom.xml에 스프링 부트 버전을 입력해놓으면 spring 라이브러리 뿐만 아니라<br> third party라이브러리들도 호환되는 버전으로 알아서 다운로드 및 관리해준다.
3. 설정 자동화스프링 부트는 @EnableAutoConfiguration 어노테이션을 선언해서 스프링에서 자주 사용했던 설정들을 알아서 등록해준다.
4. 내장Tomcat.스프링 부트는 WAS인 Tomcat을 내장하고 있다. <br>@SpringBootApplication 어노테이션이 선언되어 있는 클래스의 mail()메소드를 실행하는 것만으로 서버를 구동시킬 수 있다.
5. 아직은 왜 springboot을 사용하는 지 모르겠지만 java을 이용하기위하여 springboot을 선택을 하였다.

https://cheershennah.tistory.com/194 // 참고

```
    SpringBoot
```

---

## AWS

AWS 가상 컴퓨터를 이용하여 24시간 TOCAT서버 유지

responsive-request 24h 처리를 할생각입니다.

아직은 AWS을 이용할 생각이지만, 배포를 할시점에 웹서버 배포 플랫폼 Netlify을 이용하여 배포할 생각 <br>(아직 잘몰라서 Netlify와 AWS을 같이 사용할수 있는지 모르겠습니다.)

https://aws.gabia.com/?utm_source=google&utm_medium=cpc&utm_term=aws&utm_campaign=AWS // AWS

```
Amazon Web Services
```

---

## TOCAT VS Apache

TOCAT

TOCAT을 이용하여 Front-End의 데이터를 db 처리와 같은 동적인 기능들을 가공 (현제 공부 시점, TOCAT이용 이유)

1. JAVA EE 기반으로 만들어졌으며, <br> JSP와 Servlet을 구동하기 위한 서블릿 컨테이너 역할을 수행한다. <br>
   아파치서버와는 다르게 DB연결, 다른 응용프로그램과 상호 작용 등 동적인 기능들을
   사용할 수 있다.
2. Apache는 TOCAT에 포함되는 개념이라 TOCAT을 사용하는 건 Apache도 사용가능 한 것이다.
3. 톰캣 - DB처리와 같은 동적인 기능들을 가공하여 HTML파일로 만들어 클라이언트에게 제공(8080 포트)

https://velog.io/@kdhyo/Apache-Tomcat-%EB%91%98%EC%9D%B4-%EB%AC%B4%EC%8A%A8-%EC%B0%A8%EC%9D%B4%EC%A7%80 // TOCAT VS Apache

---

# 2022_06_21 1차 수정목표

### 당신은 혹시 .. 인터넷 상에서 무지성 키보드 워리어?

```
뉴스를 가지고와서 달리는 댓글의 혐오지수를 확인

[열심히 사는 다경] [오전 11:36] 저희가 하고자 하는게 글이 주어지면 그것에 대한 자신의 생각을 적고 이 사람의 성향이 어떤지 파악하는 프로그램이잖아요.

[열심히 사는 다경] [오전 11:38] 그냥 간단하게 혐오에 대해서 뭘 더 추가할 필요가 없이 이 사람의 답글이 편견이 존재하는지 혐오 표현이 존재하는지 판단헤주는 프로그램이라고 생각했어요.

[열심히 사는 다경] [오전 11:38] 그냥 간단하게 혐오에 대해서 뭘 더 추가할 필요가 없이 이 사람의 답글이 편견이 존재하는지 혐오 표현이 존재하는지 판단헤주는 프로그램이라고 생각했어요.

[열심히 사는 다경] [오전 11:39] 저기서 주어진 글은 커뮤니티에서 돌아다니는 깻잎 논쟁같은 글을 가져와서 써도 괜찮고요.

[박승찬] [오전 11:50] 이걸로 할생각이였지 뉴스 같은거 가져와서

[박승찬] [오후 12:20] 임시 api을 무엇으로 할지 생각은 드네
content, gender, oters, none?
```

https://github.com/kocohub/korean-hate-speech

### 1. 위의 깃 허브의 데이터 셋을 참고 임시 API 설정

```
임시 api
{
    contand : "박승찬",
    hate : true,
    gender : true,
    none
}
```

### 2.댓글을 넣을수 있는 무료 오픈소스를 활용

https://www.livere.com/ 라이브리

css을 사용하여 이쁘게 하는 것이 가능한지 확인하자.

---
