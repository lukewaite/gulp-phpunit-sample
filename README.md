# gulp-phpunit-sample

> This is a repository is intended to provide a space to reproduce issue https://github.com/mikeerickson/gulp-phpunit/issues/30

## Issue
Due to the `! skip` test in [gulp-phpunit/index:205](https://github.com/mikeerickson/gulp-phpunit/blob/master/index.js#L205)
the testSuite option is not appended to the phpunit command when invoked.

## Branches
Repository has two branches:
* `master`
* `fork`

#### Don't forget to npm install between branches.

### Master Branch
The master branch uses the most recent tagged release of `gulp-phpunit`.

### Fork Branch
The fork branch uses the [lukewaite/gulp-phpunit](https://github.com/lukewaite/gulp-phpunit) fork which has been
patched to not experience the issue.

## Expected Behavior

The tests are divided into two test suites, `unit`, and `functional` which are defined in `phpunit.xml`.
Each suite contains a single test, `unit`s test will pass, and `functional`s test will fail.

Running `gulp test:unit` should run a single test which will pass.

## Actual

Running `gulp test:unit` runs both unit and functional tests, and thus fails due to the failing test in the
`functional` suite.


