#! /bin/bash
mkdir $1
cp -r ./starter/. $1
code $1
cd $1
npm start
