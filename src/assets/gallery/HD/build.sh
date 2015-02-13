IFS="
"
for i in *; do convert -resize '800x800>' "$i" ../medium/"$i" ; done
for i in *; do convert -gravity center -thumbnail 100x100^ -extent 100x100  "$i" ../thumbs/"$i"; done
