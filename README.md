# 🦊 구미호 도감 · 여우의 아홉 가지 재주

꼬리 아홉 개의 여우가 부리는 **아홉 가지 재주**를 담은 한 장짜리 웹페이지입니다.
빌드 도구 없이 `index.html`, `styles.css`, `script.js` 정적 파일로 동작하며, 모바일·크롬에 최적화되어 있습니다.

- **계절 테마 시스템** — 디자인 토큰이 `themes/`에 분리되어 있어 한 줄로 계절 전환 가능. 가을 🍂 (주황·갈색, 낙엽)과 여름 🌊 (하늘·바다, 모래사장 칩) 두 테마 제공
- 표 9행 3열 — 미호 번호(일미호~구미호) / 여우 재주 / 짧은 이야기
- 좁은 화면(≤ 480px)에서는 각 행이 세로 카드로 자동 전환
- 폰트: 본문 [Pretendard], 제목 [Jua] (CDN)

## 로컬에서 보기

아래 중 하나로 실행한 뒤 브라우저에서 열면 됩니다.

```bash
# 방법 1) 파이썬 내장 서버
python3 -m http.server 4321
# → http://localhost:4321

# 방법 2) npx serve
npx serve .
```

> `index.html`을 파일로 바로 열어도 되지만(`file://`), 로컬 서버로 여는 편이 폰트 CDN 로딩까지 실제 배포와 동일하게 확인됩니다.

## Vercel 배포

정적 사이트라 **별도 설정이 필요 없습니다.**

### 방법 1) Vercel CLI (추천)

```bash
# 이 폴더에서
npx vercel          # 로그인 후 미리보기 배포
npx vercel --prod   # 프로덕션 배포
```

프레임워크를 물으면 **Other**, 빌드 명령은 비워두고, 출력 디렉토리는 현재 폴더(루트) 그대로 두면 됩니다.

### 방법 2) GitHub 연동

1. 이 폴더를 GitHub 저장소로 push
2. [vercel.com](https://vercel.com) → **Add New… → Project** → 저장소 Import
3. Framework Preset: **Other**, Build Command 없음, Output Directory: 루트 → **Deploy**

## 파일 구조

```
.
├── index.html          # 페이지 구조 (+ 계절 테마 <link> 선택)
├── styles.css          # 계절 중립 구조: 레이아웃·크기·애니메이션 (색은 전부 var() 참조)
├── themes/
│   ├── autumn.css      # 가을 테마 토큰 — 주황·갈색, 낙엽 🍂
│   └── summer.css      # 여름 테마 토큰 — 하늘·바다, 모래사장 🌊
├── script.js           # 페이지 스크립트 (+ 테마 색을 meta theme-color에 동기화)
├── README.md
└── .claude/launch.json # 로컬 미리보기용 설정 (배포와 무관)
```

## 계절 바꾸는 법

`index.html`의 테마 `<link>` 한 곳에서 파일명만 바꾸면 전체 디자인 톤(배경 그라데이션, 카드·칩 색, 그림자, 배경 장식 이모지, 브라우저 크롬 색)이 통째로 바뀝니다.

```html
<link rel="stylesheet" href="./themes/autumn.css" />  <!-- 가을 -->
<link rel="stylesheet" href="./themes/summer.css" />  <!-- 여름 -->
```

새 계절을 만들려면 `themes/autumn.css`를 복사해 값만 바꾸면 됩니다. 토큰마다 어디를 칠하는 값인지 주석이 달려 있고, 토큰을 빠뜨리면 그 부분만 스타일이 사라져 바로 티가 납니다. 구조·레이아웃(`styles.css`)과 내용(`index.html`)은 계절과 무관하게 공유됩니다.
