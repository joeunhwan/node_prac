NODE.JS 내가 필요한 요점


1. 시작하기
node.js 공홈가서 LTS로 설치
node -v / npm -v 로 버전 확인

2. 패키지 설치
npm install / npm install --save-dev 실제적용과 개발에서만 쓸 패키지 나눠서 설치하는 용도
ㄴ 예시 실제적용(로대쉬) / 개발에서만(parcel)

*주의사항
1_ 개발용과 실제 브라우저에서 동작 할 배포용으로 설치하는 패키지들을 구분해야 함
2_ 개발용은 --save-dev 로 설치할 것 (축약으로는 -D / 소문자허용 안됨)
3_ package.json에서 dependencies와 devDependencies 로 구분가능

*NODE 사용시 주의사항
package.json에서 script: dev는 개발용으로 쓰는 것
build는 실 제품용으로 배포

3. 패키지 별 버전에 대한 내용
dependencies와 devDependencies 안에 패키지들의 유의적버전은
^캐롯 ~틸드 두가지로 업데이트버전 표시 가능
4(메이저).16(마이너).21(패치)
^캐롯은 메이저 npm update lodash(최신버전으로 메이저 및 모든 업뎃) npm install lodash@4.17.21(버전 지정해서 변경)
~틸드는 패치버전만 변경  npm update lodash(메이저와 마이너만 빼고 패치만 업뎃/거의 안쓰긴 함)
