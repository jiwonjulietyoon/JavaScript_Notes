#### Bootstrap Grid System

##### break points

- `-`: <576px            0-575
- `sm`: >= 576px       576-767
- `md`: >= 768px       768-991
- `lg`: >= 992px       992-1199
- `xl`: >= 1200px     1200+

##### .container > .row > .col

- `.container`: 좌우 margin 있음 	vs `.container-fluid`: width 100%
- `.col-xl-1` : 1200px~ 에서 1/12 차지
- `.col-lg-2` : 992px~ 에서 2/12 차지
- `.col-md-4` : 768px~ 에서 4/12 차지
- `.col-sm-6` : 576px~ 에서 6/12 차지
- `.col-12` : 0~575px 에서 12/12 차지
- `.col` 만 지정했을 경우: 브라우저 너비가 아주 작지만 않으면 row 안의 모든 col 요소가 한 줄에 표시됨
  - 브라우저 너비가 줄어들수록 overflow되는 요소부터 하나씩 다음 줄로 넘어감
- `.col-sm-4` 만 지정: 575px까지는 12/12 차지, 576px부터 4/12 차지
- `.col-md-4` 만 지정: 767px까지는 12/12 차지, 768px부터 4/12 차지