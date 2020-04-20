#!/bin/bash

set -x

pushd ./mkdocs
pip install -r requirements.txt
mkdocs build
mkdir -p ../site/mkdocs
cp -a site ../public/mkdocs
popd

pushd ./vuepress
yarn install
yarn build
cp -a .vuepress/dist ../public/vuepress
popd
