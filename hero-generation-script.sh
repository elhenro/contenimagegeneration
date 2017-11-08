# auztomatic hero image producer
# # # not finished yet
# usage: hnr@hnr-b:~/web/CI-generator$ sh hero-generation-script.sh blank_hero.jpg 'Test Titel' script-res
# --> $ sh hero-generation-script.sh hero-bg.jpg 'CTA TEXT' final-name
# args
INPUT="$1"
TITLE="$2"
FILENAME="$3"
#TODO convert to lowercase with udnerscore_

# put title text in html
sed -i "s/TEXT/${TITLE}/" button.html

# render CTA from button.html
phantomjs /usr/local/share/phantomjs-2.1.1-linux-x86_64/examples/rasterize.js /home/hnr/web/CI-generator/button.html exp.png

# merge images southeast - put CTA on image
composite -gravity southeast exp.png $INPUT $FILENAME.jpg 

# End
# replace CTA text back
sed -i "s/${TITLE}/TEXT/" button.html

export LANG=C.UTF-8

