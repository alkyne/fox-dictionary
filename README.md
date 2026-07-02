# 🦊 구미호 도감 · 여우의 아홉 가지 재주

꼬리 아홉 개의 여우가 부리는 **아홉 가지 재주**를 담은 한 장짜리 웹페이지입니다.
빌드 도구 없이 `index.html`, `styles.css`, `script.js` 정적 파일로 동작하며, 모바일·크롬에 최적화되어 있습니다.

- **따뜻한 가을 여우** 무드 (주황·갈색 그라데이션, 둥근 카드, 부드러운 그림자)
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
├── index.html          # 페이지 구조
├── styles.css          # 스타일과 진입 애니메이션
├── script.js           # 페이지 스크립트
├── README.md
└── .claude/launch.json # 로컬 미리보기용 설정 (배포와 무관)
```
