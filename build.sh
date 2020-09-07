#!/bin/bash

cd api/data
yarn build
cd ../domain
yarn build
cd ../vendor
yarn build

cd ../../

cd site/data
yarn build
cd ../domain
yarn build
cd ../ui
yarn build
cd ../vendor
yarn build
