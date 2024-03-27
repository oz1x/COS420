cd ./next/grumio/
npm run build 

rm ../../spring/grumio/src/main/resources/static/* -r
cp ./out/* -r ../../spring/grumio/src/main/resources/static/

cd ..\..\spring\grumio
./gradlew clean assemble

Expand-Archive -LiteralPath '.\build\distributions\demo-0.0.1-SNAPSHOT.zip' -DestinationPath '.\build\distributions'
cd build\distributions\demo-0.0.1-SNAPSHOT
./demo.bat

cd ../..