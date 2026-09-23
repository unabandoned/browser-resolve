# browser-resolve Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.6](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.5...browser-resolve-v2.0.6) (2026-09-23)


### Bug Fixes

* stop dev-only commits from cutting releases ([#21](https://github.com/unabandoned/browser-resolve/issues/21)) ([e580b67](https://github.com/unabandoned/browser-resolve/commit/e580b67d4ff20b45d220f6a9c3267255a4b4148c))

## [2.0.5](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.4...browser-resolve-v2.0.5) (2026-09-22)


### Dependencies & maintenance

* **deps:** update unabandoned/.github action to v1.0.4 ([#15](https://github.com/unabandoned/browser-resolve/issues/15)) ([a7aa81b](https://github.com/unabandoned/browser-resolve/commit/a7aa81bf5d1195ba67dbb4fcf46e18aa743783a5))
* **deps:** update unabandoned/.github action to v1.0.5 ([#17](https://github.com/unabandoned/browser-resolve/issues/17)) ([638770f](https://github.com/unabandoned/browser-resolve/commit/638770ff4b62f5dc4fc43bb2e379d1b03042db67))
* **deps:** update unabandoned/.github action to v1.1.0 ([#18](https://github.com/unabandoned/browser-resolve/issues/18)) ([53805f0](https://github.com/unabandoned/browser-resolve/commit/53805f0851940e70bf88df455a371a6fc1d68511))

## [2.0.4](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.3...browser-resolve-v2.0.4) (2026-08-28)


### Dependencies & maintenance

* **deps:** update unabandoned/.github action to v1.0.3 ([#13](https://github.com/unabandoned/browser-resolve/issues/13)) ([ecee254](https://github.com/unabandoned/browser-resolve/commit/ecee2540e252aeae97f71cbef0407f8cfb709ddc))

## [2.0.3](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.2...browser-resolve-v2.0.3) (2026-08-23)


### Dependencies & maintenance

* **deps:** update commitlint monorepo to v21.2.2 ([#10](https://github.com/unabandoned/browser-resolve/issues/10)) ([a05e123](https://github.com/unabandoned/browser-resolve/commit/a05e123d6335a46d5a134acb01b686297ad3e7ce))
* **deps:** update unabandoned/.github action to v1.0.1 ([#11](https://github.com/unabandoned/browser-resolve/issues/11)) ([b8d3065](https://github.com/unabandoned/browser-resolve/commit/b8d3065ad8de4437a3cb82158e801fac53377eaf))
* **deps:** update unabandoned/.github action to v1.0.2 ([#12](https://github.com/unabandoned/browser-resolve/issues/12)) ([dd31320](https://github.com/unabandoned/browser-resolve/commit/dd31320a02dee8f012126d0c5cf136a8b1b697a3))
* pin reusable workflows to the @unabandoned/.github v1.0.0 release ([#8](https://github.com/unabandoned/browser-resolve/issues/8)) ([eb80b9a](https://github.com/unabandoned/browser-resolve/commit/eb80b9a9117f6ee633b3a7cae1f99c47b2776c6d))

## [2.0.2](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.1...browser-resolve-v2.0.2) (2026-08-14)


### Dependencies & maintenance

* add .unabandoned.yml dashboard metadata ([#4](https://github.com/unabandoned/browser-resolve/issues/4)) ([cecaddf](https://github.com/unabandoned/browser-resolve/commit/cecaddf1ffd75a1fe913afe8b34d78978f6b2aa2))
* **deps:** update unabandoned/.github digest to 88ce617 ([#6](https://github.com/unabandoned/browser-resolve/issues/6)) ([ca7b934](https://github.com/unabandoned/browser-resolve/commit/ca7b934208df16c2de1ce15f7f1e72812ba66381))

## [2.0.1](https://github.com/unabandoned/browser-resolve/compare/browser-resolve-v2.0.0...browser-resolve-v2.0.1) (2026-08-14)


### Reverts

* 92, use resolve's `preserveSymlinks` option ([03d3067](https://github.com/unabandoned/browser-resolve/commit/03d3067a394596b1ca6d1f5c7202516346b03d57))


### Dependencies & maintenance

* add all the versions for browserify ([accde2a](https://github.com/unabandoned/browser-resolve/commit/accde2ad1c1dcb4860ea43d0021543b8e97799a9))
* drop node 0.6 which is broken on travis anyway ([90fc829](https://github.com/unabandoned/browser-resolve/commit/90fc829d2257c6d1126cb4212d3b198d5b825cd7))
* fix travis build configuration warnings ([4f29c5c](https://github.com/unabandoned/browser-resolve/commit/4f29c5c35f9c044e4fb94bc6e64ce2e8b74aa092))
* onboard browser-resolve into the unabandoned program ([#1](https://github.com/unabandoned/browser-resolve/issues/1)) ([683a1f2](https://github.com/unabandoned/browser-resolve/commit/683a1f2960f56d665441bb1b57a4730814a57081))

## 2.0.0 - 2020-08-03
* Update `resolve` to 1.17.0+.

Technically, this is a bugfix and feature update. However, older browserify versions rely on a `resolve` bug, and would break if this was published as a minor version update.
