<h1 align="middle">필터링 기능(합집합, 교집합)</h1>

# 🔗 배포

[https://angry-albattani-8e8937.netlify.app](https://angry-albattani-8e8937.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a580b2b0-c471-4339-9128-f18b39de1a34/deploy-status)](https://app.netlify.com/sites/angry-albattani-8e8937/deploys)

<br><br>

# 기술스택

<img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img alt="typescript" src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">


<img alt="styled-components" src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img alt="eslint" src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img alt="prettier" src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

<br><br>


# 🏹 기능구현
![에이팀벤처스](https://user-images.githubusercontent.com/82519641/158860208-99af5723-496a-4c81-9d3f-eea2d0a72efa.gif)

  - 카테고리별로 필터링 기능 
  - 가공방식 & 재료 - 교집합
  - 가공방식, 재료 내에 있는 성분 - 합집합
  - 필터링 리셋 기능
  - 상담중 견적만 필터링

  <br><br>

# 🏗 프로젝트 구조

```
📦src
 ├──📂commons
 │   ├── 📜common.ts
 │   ├── 📜type.ts
 │   └── 📜utils.ts
 ├──📂components
 │   ├──📂Card
 │   │   └──📜index.tsx
 │   ├──📂Container
 │   │   └──📜index.tsx
 │   └──📂Header
 │       └──📜index.tsx
 ├──📂style
 │   ├──📜global.ts
 │   ├──📜style.ts
 │   ├──📜styled.d.ts
 │   └──📜theme.ts
 ├──📜App.css
 ├──📜App.tsx
 ├──📜index.css
 └──📜index.tsx
```

# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/wiseeee/2nd-week-ateam-ventures

$ cd 2nd-week-ateam-ventures

$ npm install

$ npm run start
```

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)

