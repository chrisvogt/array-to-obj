# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-04-08

### Deprecated

- **This package is now deprecated.** Native `Object.fromEntries()` (ES2019+) covers the core use case without any dependency. For richer utility-library support, use [es-toolkit](https://es-toolkit.dev/) (`keyBy`, `groupBy`) or [radashi](https://radashi.js.org/) (`objectify`, `group`). The README has been replaced with a migration guide.

## [2.0.0] - 2026-04-08

### Breaking

- **Node.js:** Minimum supported version is now **20.19+**. Node.js 18 is no longer supported (it reached end of life in April 2025). Reflected in `package.json` `engines`, the readme, and CI (Node 20, 22, and 24 only). The published API is unchanged; this release is for consumers and environments that must align with supported Node versions.

### Changed

- Raised dev tooling to current majors where needed for maintenance and security: `ava` 7, `nyc` 18, `xo` 2, and current `@babel/preset-env` patchline; added an npm `overrides` entry so the legacy `glob` → `minimatch@3` chain from `@babel/cli` uses a patched `brace-expansion`.

### Security

- `npm audit` reports **0** vulnerabilities after the above dependency refresh and override.

## [1.2.0] - 2026-02-11

### Fixed
- Fixed bug where using a non-existent string key would throw `TypeError: key is not a function` instead of falling back to array index as documented
- String keys that don't exist in objects now properly fall back to array index, matching the documented behavior

### Changed
- Updated all devDependencies to latest versions:
  - `@babel/cli`: 7.7.0 → 7.28.6
  - `@babel/core`: 7.7.2 → 7.29.0
  - `@babel/preset-env`: 7.7.1 → 7.29.0
  - `ava`: 1.4.1 → 6.4.1
  - `nyc`: 15.1.0 → 17.1.0
  - `xo`: 0.24.0 → 1.2.3
- Replaced deprecated `@babel/plugin-proposal-object-rest-spread` with `@babel/plugin-transform-object-rest-spread`
- Removed deprecated `codecov` npm package
- Updated CI workflow to use `codecov-action@v5` with tokenless uploads
- Added Node.js 24 to CI test matrix (now tests on 18, 20, 22, 24)
- Renamed test file from `test.js` to `test.mjs` for ES module compatibility
- Tests now run against source code (`index.js`) instead of compiled output (`lib/index.js`)

### Added
- Added `.nvmrc` file specifying Node.js 24 for local development
- Added 4 new test cases improving edge case coverage:
  - Empty array handling
  - Non-existent string key fallback behavior
  - Falsy key values (0, '', false)
  - Function returning falsy values
- Achieved 100% code coverage (statements, branches, functions, and lines)

### Security
- Reduced security vulnerabilities from 10 to 3 (all low severity)
- Removed moderate severity `js-yaml` vulnerability that was in deprecated codecov package

## [1.1.0] - Previous Release

Initial tracked version.

[2.1.0]: https://github.com/chrisvogt/array-to-obj/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/chrisvogt/array-to-obj/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/chrisvogt/array-to-obj/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/chrisvogt/array-to-obj/releases/tag/v1.1.0
