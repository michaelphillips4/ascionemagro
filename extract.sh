#!/bin/bash

cat "src/app/clients/page.tsx" | while read line
do



SPAN='<span.*span>' 
#[[ $1 =~ $SPAN ]]
#echo $1 # 0 with the sample value, i.e., a successful match
x=$(echo $line | grep -o $SPAN)

temp=${x/<span/\"text\":\"}
temp=${temp/className=\"year\">/}
temp=${temp/<\/span><span className=\"client\">/\" , \"name\":\"}
temp=${temp/<\/span>/\"}
if [ -n "$temp" ]; then
echo "$temp," 
fi


DATE='year="\w*"' ;
d=$(echo $line | grep -o $DATE)
d=${d/year=/\"year\":}
echo $d

CLIENT='client="\w*"' ;
c=$(echo $line | grep -o $CLIENT)
c=${c/client=/\"client\":}
echo "$c"

R='href=".*"' ;
r=$(echo $line | grep -o $R)
r=${r/href=/\"href\":}
echo $r

done