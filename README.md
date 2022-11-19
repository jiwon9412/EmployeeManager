# Employee Manager

회사를 다니며 자산관리를 하는 프로그램이 있으면 좋겠다는 생각이 들어서 시작해 본 토이 프로젝트이다.   
드림코딩 강의를 듣던 중 Card-Maker 프로젝트의 내용을 활용해서 사원의 정보를 등록하고 관리하는 어플리케이션을 만들어보았다.   
Firebase를 활용하여 Google, Github 로그인을 구현하였고 cloudinary를 이용해서 이미지 파일 관리를 하였다.

##

### 드림코딩 강의 프로젝트와의 차별점 
강의의 프로젝트와 차별점으로 styled-component, typescript 사용, Atomic Design Pattern 적용, Web Storage 사용 등을 두었다.

* 스타일 도구로 styled-component를 채택함으로써 JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유할 수 있었다. (props를 활용한 조건부 스타일링)
* typescript를 적용함으로써 컴파일 단계에서 오류를 체크할 수 있었으며 함수나 변수의 사용의도를 쉽게 파악할 수 있게 되었다.
* Atomic Design Pattern을 적용함으로써 디렉토리 구조를 이전보다 세밀하게 나눌 수 있었고 컴포넌트의 재활용이 용이해졌다.
* Web Storage를 사용하여 로그인 유저 id (session storage), 다크모드 (local storage)를 관리할 수 있었고, context를 사용하여 로딩 상태를 관리하여 Loading 컴포넌트가 적절하게
사용 되도록 관리하였다.

##

### 프로젝트 기술 스택
1. React
2. TypeScript
3. Styled-Components
4. firebase
5. cloudinary

### 프로젝트 구조
* components : Atomic Design Pattern 변형 (atoms, blocks, pages 3구조)
 1. atom : 단일 컴포넌트, 기능 X
 2. blocks : atom 두개 이상 합쳐진 컴포넌트, 기능 O
 3. page : atom과 block이 모여서 만들어진 하나의 페이지
* context : 전역 상태관리를 위해 contextAPI 사용
* service : firebase를 통한 CRUD, cloudinary를 통한 이미지파일 관리를 위한 서비스로직

##

### Result

* firebase를 통한 구글, 깃허브 로그인
<img src="https://user-images.githubusercontent.com/80965224/202856590-c3d2aa0b-bc48-475a-8b10-a34f4854a44d.png" width="700px">  

* Home Page 
  - carousel 구현 - (아래 카드부분 carousel 미구현 상태)
  - side nav bar 구현
<img src="https://user-images.githubusercontent.com/80965224/202856673-2a242d91-abb6-470a-9959-4f4d708664ad.png" width="700px">  

* List Page
  - firebase 활용한 조회, 입력, 삭제 구현 - (현재 입력만 구현상태) - cloudinary를 사용하여 이미지 파일 관리
  - 멤버 추가 modal 구현 
  - 멤버 삭제 방식 미결정
<img src="https://user-images.githubusercontent.com/80965224/202856694-a12bd8d5-0cec-4f44-9463-3163ad78522a.png" width="700px"> 
<img src="https://user-images.githubusercontent.com/80965224/202856854-07d2b89f-3f4d-4bbe-9540-1a991da4215c.png" width="700px"> 





##



