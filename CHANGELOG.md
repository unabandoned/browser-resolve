# browser-resolve Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
