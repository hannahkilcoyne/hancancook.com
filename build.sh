#!/usr/bin/env bash

set -e

bundle install
npm install 
bundle exec jekyll build
npx jampack ./_site/
find _site -name '*.html' -exec tidy -config tidy.cfg '{}' \;
# pushd _site
#. python3 -m http.server 8080
#. popd
