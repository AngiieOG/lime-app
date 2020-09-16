# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.8](https://github.com/germanferrero/lime-app/compare/v0.2.7...v0.2.8) (2020-09-16)

### [0.2.6](https://github.com/germanferrero/lime-app/compare/v0.2.5...v0.2.6) (2020-09-15)


### Features

* **firmware upgrade:** basic implementation of firmware upgrade ([175ec82](https://github.com/germanferrero/lime-app/commit/175ec820aab261463c13318b30bc1ff687467bf4))


### Bug Fixes

* **fbw:** allow uppercase letters in network name ([987c458](https://github.com/germanferrero/lime-app/commit/987c4581d350e3cc75b2e467e1559748e870f2fc))
* **rx:** fix most_active change node functionality ([acc2617](https://github.com/germanferrero/lime-app/commit/acc26176da225501c6d02c8403bede54d270cefb))
* **rxpage:** fix uptime days field ([85e6b55](https://github.com/germanferrero/lime-app/commit/85e6b5562585c69652a08f2e828e57181cc543e1))
* **shared-password:** do not show success message on error ([3866041](https://github.com/germanferrero/lime-app/commit/38660416dbb6391b0e338c0f128e52dd57828bcd))

### [0.2.5](https://github.com/germanferrero/lime-app/compare/v0.2.4...v0.2.5) (2020-05-20)


### CI Changes

* **libremesh pull request** overwrite master Makefile, no template one ([eb4fe08](https://github.com/germanferrero/lime-app/commit/eb4fe08815af15f68fee222263bd151bff79744c))

### [0.2.4](https://github.com/germanferrero/lime-app/compare/v0.2.2...v0.2.4) (2020-05-20)


### Features

* **fbw:** add shared password to network creation form ([0e90457](https://github.com/germanferrero/lime-app/commit/0e90457f828e84264ded5568205925d57ef82918)), closes [#237](https://github.com/germanferrero/lime-app/issues/237)
* **plugin-network-admin:** add network admin plugin ([b40604c](https://github.com/germanferrero/lime-app/commit/b40604c1bae0ed8d65d1c01ddd63e8b791390d94))


### Bug Fixes

* **locate:** fix ui bugs related to undefined coordinates of nodes ([d6e90d5](https://github.com/germanferrero/lime-app/commit/d6e90d5f0bd2e205731836daf3312e29c9d391bc)), closes [#250](https://github.com/germanferrero/lime-app/issues/250)

### [0.2.3](https://github.com/libremesh/lime-app/compare/v0.2.2...v0.2.3) (2020-02-11)


### Bug Fixes

* **bug:** fix access from different node ([956b337](https://github.com/libremesh/lime-app/commit/956b337048b640062fdc975b74a74f605bbe0b52))

### [0.2.2](https://github.com/libremesh/lime-app/compare/v0.2.1...v0.2.2) (2020-01-29)


### Features

* **rxjs:** update to new api in epics and api files ([8500cc5](https://github.com/libremesh/lime-app/commit/8500cc5664834c73eb539d0b1ee8f3b1eb22b4d5))


### Bug Fixes

* **align:** fix setInterval and redux state ([a430c69](https://github.com/libremesh/lime-app/commit/a430c69152728dba60c324cea47dfc3225496f3c))
* **bug:** 10.5.0.1 as home address ([58f581d](https://github.com/libremesh/lime-app/commit/58f581da78a1479bc160c40cfeb5793fe138c34d))
* **intl:** fix int18n errors and add new translations ([c3dc4bb](https://github.com/libremesh/lime-app/commit/c3dc4bb425c5f49a4cfeb52c39416d56028e7268))
* **navigation:** avoid undefined elements ([1814c39](https://github.com/libremesh/lime-app/commit/1814c39ebe49edd3e1f817d7d9836632709772af))
* **timer:** fix uptime timer ([214f83a](https://github.com/libremesh/lime-app/commit/214f83a1a53eea704ddfed4f28eb87166d5c651e))
* **timer:** fix uptime timer ([21b3e2e](https://github.com/libremesh/lime-app/commit/21b3e2ed6a7b38b37a02e2b3f3db730c670bf73c))

### [0.2.1](https://github.com/libremesh/lime-app/compare/v0.2.0...v0.2.1) (2019-10-22)


### Bug Fixes

* **fbw:** community name in lowercase ([73d464e](https://github.com/libremesh/lime-app/commit/73d464e))
* **slugify:** improves domain usage ([0237be9](https://github.com/libremesh/lime-app/commit/0237be9))
* **validation:** fix hostname and communiy name validation in fbw ([436a258](https://github.com/libremesh/lime-app/commit/436a258))
* **validation:** fix hostname validation in adminPage ([13afd8c](https://github.com/libremesh/lime-app/commit/13afd8c))


### Features

* **redux:** add generic actions file ([fb4f173](https://github.com/libremesh/lime-app/commit/fb4f173))
* **validation:** hostname validation and slugify ([48cdd4e](https://github.com/libremesh/lime-app/commit/48cdd4e))

## [0.2.0](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.13...v0.2.0) (2019-10-08)


### Bug Fixes

* **config:** remove duplicated hostname ([0cd3ac9](https://github.com/libremesh/lime-app/commit/0cd3ac9)), closes [#207](https://github.com/libremesh/lime-app/issues/207)
* **redirect:** full redirect instead of change the api endopint ([5dd520e](https://github.com/libremesh/lime-app/commit/5dd520e))
* **redirect:** remove redirect on metrics page ([6639b64](https://github.com/libremesh/lime-app/commit/6639b64))
* **validation:** network and host name validation in FBW ([85755ef](https://github.com/libremesh/lime-app/commit/85755ef))

<a name="0.2.0-alpha.13"></a>
# [0.2.0-alpha.13](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.12...v0.2.0-alpha.13) (2019-06-25)


### Bug Fixes

* **metrics:** fix error messages on gateway error ([858bf02](https://github.com/libremesh/lime-app/commit/858bf02))


### Features

* **metrics:** change to new lime-metrics response ([7131d02](https://github.com/libremesh/lime-app/commit/7131d02))



<a name="0.2.0-alpha.12"></a>
# [0.2.0-alpha.12](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.11...v0.2.0-alpha.12) (2019-06-25)


### Bug Fixes

* **location:** catch error loading nodes links ([a255d9c](https://github.com/libremesh/lime-app/commit/a255d9c))
* **location:** fix comparation. Convert all values to number ([f47da3a](https://github.com/libremesh/lime-app/commit/f47da3a))
* **location:** fix geojson render ([6b90dc6](https://github.com/libremesh/lime-app/commit/6b90dc6))
* **location:** remove develop ip in meta/CONECTION_START event ([12c3a92](https://github.com/libremesh/lime-app/commit/12c3a92))
* **package:** update axios to version 0.19.0 ([27401f9](https://github.com/libremesh/lime-app/commit/27401f9))


### Features

* **location:** include hostname in point data ([f3c4ead](https://github.com/libremesh/lime-app/commit/f3c4ead))



<a name="0.2.0-alpha.6"></a>
# [0.2.0-alpha.6](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.5...v0.2.0-alpha.6) (2019-03-09)


### Bug Fixes

* change api error message ([033c5d9](https://github.com/libremesh/lime-app/commit/033c5d9)), closes [#113](https://github.com/libremesh/lime-app/issues/113)
* first boot wizard screen ([46069ef](https://github.com/libremesh/lime-app/commit/46069ef))
* metrics on gateway node ([3fead9f](https://github.com/libremesh/lime-app/commit/3fead9f)), closes [#112](https://github.com/libremesh/lime-app/issues/112)



<a name="0.2.0-alpha.5"></a>
# [0.2.0-alpha.5](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.3...v0.2.0-alpha.5) (2019-02-25)



<a name="0.2.0-alpha.4"></a>
# [0.2.0-alpha.4](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.3...v0.2.0-alpha.4) (2019-02-25)



<a name="0.2.0-alpha.3"></a>
# [0.2.0-alpha.3](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.0...v0.2.0-alpha.3) (2019-02-25)


### Bug Fixes

* **fbw:** change fbw api ([696fc98](https://github.com/libremesh/lime-app/commit/696fc98))
* **fbw:** remove groundrouting plugin and add fbw ([cb5711d](https://github.com/libremesh/lime-app/commit/cb5711d))
* **redux:** fbw catch must return an array ([b8d34e2](https://github.com/libremesh/lime-app/commit/b8d34e2))
* **redux-observable:** update epics to redux-ovservable 1.0 ([a8a9234](https://github.com/libremesh/lime-app/commit/a8a9234))


### Features

* **component:** add global banner component ([154568a](https://github.com/libremesh/lime-app/commit/154568a))
* **fbw:** add firstbootwizard page ([8157a0d](https://github.com/libremesh/lime-app/commit/8157a0d))
* **fbw:** init first boot wizard ([905b552](https://github.com/libremesh/lime-app/commit/905b552))



<a name="0.2.0-alpha.2"></a>
# [0.2.0-alpha.2](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.0...v0.2.0-alpha.2) (2019-02-25)


### Bug Fixes

* **fbw:** change fbw api ([696fc98](https://github.com/libremesh/lime-app/commit/696fc98))
* **fbw:** remove groundrouting plugin and add fbw ([cb5711d](https://github.com/libremesh/lime-app/commit/cb5711d))
* **redux:** fbw catch must return an array ([b8d34e2](https://github.com/libremesh/lime-app/commit/b8d34e2))
* **redux-observable:** update epics to redux-ovservable 1.0 ([a8a9234](https://github.com/libremesh/lime-app/commit/a8a9234))


### Features

* **component:** add global banner component ([154568a](https://github.com/libremesh/lime-app/commit/154568a))
* **fbw:** add firstbootwizard page ([8157a0d](https://github.com/libremesh/lime-app/commit/8157a0d))
* **fbw:** init first boot wizard ([905b552](https://github.com/libremesh/lime-app/commit/905b552))



<a name="0.2.0-alpha.1"></a>
# [0.2.0-alpha.1](https://github.com/libremesh/lime-app/compare/v0.2.0-alpha.0...v0.2.0-alpha.1) (2019-02-25)


### Bug Fixes

* **fbw:** change fbw api ([696fc98](https://github.com/libremesh/lime-app/commit/696fc98))
* **fbw:** remove groundrouting plugin and add fbw ([cb5711d](https://github.com/libremesh/lime-app/commit/cb5711d))
* **redux:** fbw catch must return an array ([b8d34e2](https://github.com/libremesh/lime-app/commit/b8d34e2))
* **redux-observable:** update epics to redux-ovservable 1.0 ([a8a9234](https://github.com/libremesh/lime-app/commit/a8a9234))


### Features

* **component:** add global banner component ([154568a](https://github.com/libremesh/lime-app/commit/154568a))
* **fbw:** add firstbootwizard page ([8157a0d](https://github.com/libremesh/lime-app/commit/8157a0d))
* **fbw:** init first boot wizard ([905b552](https://github.com/libremesh/lime-app/commit/905b552))



<a name="0.2.0-alpha.0"></a>
# [0.2.0-alpha.0](https://github.com/libremesh/lime-app/compare/v0.1.1-alpha.0...v0.2.0-alpha.0) (2018-10-24)


### Bug Fixes

* **location:** fix inverted value in default location ([6fac5dd](https://github.com/libremesh/lime-app/commit/6fac5dd))


### Features

* **align:** show message when no other node is found ([84a2c1b](https://github.com/libremesh/lime-app/commit/84a2c1b))



<a name="0.1.1-alpha.0"></a>
## [0.1.1-alpha.0](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.5...v0.1.1-alpha.0) (2018-10-23)


### Bug Fixes

* **husky:** update hooks in package.json ([87ac1ba](https://github.com/libremesh/lime-app/commit/87ac1ba))
* **path:** change default path to libremesh lime-app path ([53106c0](https://github.com/libremesh/lime-app/commit/53106c0))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.5...v0.1.0) (2018-10-23)


### Bug Fixes

* **husky:** update hooks in package.json ([87ac1ba](https://github.com/libremesh/lime-app/commit/87ac1ba))
* **path:** change default path to libremesh lime-app path ([53106c0](https://github.com/libremesh/lime-app/commit/53106c0))



<a name="0.1.0-alpha.5"></a>
# [0.1.0-alpha.5](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2018-10-23)


### Bug Fixes

* **api:** fix api call ([00dc926](https://github.com/libremesh/lime-app/commit/00dc926))
* **cors:** fix cors connection ([13ef9b5](https://github.com/libremesh/lime-app/commit/13ef9b5))
* **groundrouting:** disable groundrouting plugin ([e792737](https://github.com/libremesh/lime-app/commit/e792737))
* **package:** update leaflet.gridlayer.googlemutant to version 0.7.0 ([5be94dd](https://github.com/libremesh/lime-app/commit/5be94dd))
* **package:** update redux-observable to version 0.19.0 ([a941dce](https://github.com/libremesh/lime-app/commit/a941dce))
* **package:** update redux-observable to version 1.0.0-beta.2 ([667aa46](https://github.com/libremesh/lime-app/commit/667aa46))
* **reducer:** fix wrong state variable ([49edbcb](https://github.com/libremesh/lime-app/commit/49edbcb))
* **redux:** use new redux-observable api ([f916d61](https://github.com/libremesh/lime-app/commit/f916d61))
* **transaltion:** fix metrics page transaltions ([07969ad](https://github.com/libremesh/lime-app/commit/07969ad))
* **translations:** remove preact-inline from status component ([7668701](https://github.com/libremesh/lime-app/commit/7668701))
* **url:** fix ground routing url in menu ([78a8263](https://github.com/libremesh/lime-app/commit/78a8263))


### Features

* **loading:** add loading in ground routing page ([1d92b0f](https://github.com/libremesh/lime-app/commit/1d92b0f))
* **location:** add new ubus-lime-location api ([a32622b](https://github.com/libremesh/lime-app/commit/a32622b))
* **location:** detect unassigned location in node ([e0678a9](https://github.com/libremesh/lime-app/commit/e0678a9))
* **plugin:** init ground routing script ([442e934](https://github.com/libremesh/lime-app/commit/442e934))
* **plugin:** register groundrouting plugin in config.js ([1688639](https://github.com/libremesh/lime-app/commit/1688639))



<a name="0.1.0-alpha.4"></a>
# [0.1.0-alpha.4](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2018-02-06)



<a name="0.1.0-alpha.3"></a>
# [0.1.0-alpha.3](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2018-01-31)


### Bug Fixes

* Remove invalid code ([97518b5](https://github.com/libremesh/lime-app/commit/97518b5))



<a name="0.1.0-alpha.2"></a>
# [0.1.0-alpha.2](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.1...v0.1.0-alpha.2) (2018-01-22)


### Bug Fixes

* **package:** update redux-observable to version 0.17.0 ([e5bafbc](https://github.com/libremesh/lime-app/commit/e5bafbc))
* Remove admin options form config page ([ccbe3ab](https://github.com/libremesh/lime-app/commit/ccbe3ab))


### Features

* Add admin section ([c416cc4](https://github.com/libremesh/lime-app/commit/c416cc4))
* Setup notifications ([6e5ce8c](https://github.com/libremesh/lime-app/commit/6e5ce8c))



<a name="0.1.0-alpha.1"></a>
# [0.1.0-alpha.1](https://github.com/libremesh/lime-app/compare/v0.1.0-alpha.0...v0.1.0-alpha.1) (2017-11-24)



<a name="0.1.0-alpha.0"></a>
# [0.1.0-alpha.0](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.6...v0.1.0-alpha.0) (2017-11-24)


### Features

* **location:** Changes in how to select the new location of a node ([31fdabf](https://github.com/libremesh/lime-app/commit/31fdabf)), closes [#53](https://github.com/libremesh/lime-app/issues/53)
* **settings:** Metrics box and align status now respond to community settings ([dbc3c8d](https://github.com/libremesh/lime-app/commit/dbc3c8d)), closes [#28](https://github.com/libremesh/lime-app/issues/28)



<a name="0.0.1-alpha.6"></a>
## [0.0.1-alpha.6](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.4...v0.0.1-alpha.6) (2017-10-25)


### Bug Fixes

* **travis:** Remove on repo ([739deac](https://github.com/libremesh/lime-app/commit/739deac))
* **travis:** Skip cleanup after build ([3cec77a](https://github.com/libremesh/lime-app/commit/3cec77a))



<a name="0.0.1-alpha.5"></a>
## [0.0.1-alpha.5](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.4...v0.0.1-alpha.5) (2017-10-25)


### Bug Fixes

* **travis:** Skip cleanup after build ([3cec77a](https://github.com/libremesh/lime-app/commit/3cec77a))



<a name="0.0.1-alpha.4"></a>
## [0.0.1-alpha.4](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.3...v0.0.1-alpha.4) (2017-10-25)


### Bug Fixes

* **travis:** Wrong credentials ([d9c14b4](https://github.com/libremesh/lime-app/commit/d9c14b4))



<a name="0.0.1-alpha.3"></a>
## [0.0.1-alpha.3](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.2...v0.0.1-alpha.3) (2017-10-25)


### Bug Fixes

* **travis:** Use user and password instead of api key ([c451387](https://github.com/libremesh/lime-app/commit/c451387))



<a name="0.0.1-alpha.2"></a>
## [0.0.1-alpha.2](https://github.com/libremesh/lime-app/compare/v0.0.1-alpha.1...v0.0.1-alpha.2) (2017-10-25)



<a name="0.0.1-alpha.1"></a>
## [0.0.1-alpha.1](https://github.com/libremesh/lime-app/compare/0.0.1-alpha1...0.0.1-alpha.1) (2017-10-25)


### Bug Fixes

* **package:** update redux-observable to version 0.15.0 ([2bb161b](https://github.com/libremesh/lime-app/commit/2bb161b))



<a name="0.0.1-alpha.0"></a>
## [0.0.1-alpha.0](https://github.com/libremesh/lime-app/compare/0.0.1-alpha1...0.0.1-alpha.0) (2017-10-25)


### Bug Fixes

* **package:** update redux-observable to version 0.15.0 ([2bb161b](https://github.com/libremesh/lime-app/commit/2bb161b))
