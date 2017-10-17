import sharp from 'sharp';
const fs = require('fs');
const download = require('download');

import domtoimage from 'dom-to-image';

var prompt = require('prompt');

// npm download
// npm dom-to-image

// ## info:  https://github.com/lovell/sharp

//sharp(inputBuffer)
//  .resize(999, 599)
//  .toFile('output.webp', (err, info) => ... );
/*

sharp('input.jpg')
  //.rotate()
  .resize(999)
  .toBuffer()
  .then( data => ... )
  .catch( err => ... );
*/

// needed steps - step by step
// 
// infos sammelns

 prompt.get(['title','img-url','CTA'], function (err, result) {
        // Log the results. 
    console.log('Command-line input received:');
    console.log('  Titel: ' + result.title);
    console.log('  Downlaod Link: ' + result.img-url);
    console.log('  CTA: ' + resut.CTA);
  });

// Start the prompt 
   
     prompt.start();

// generate-content-images pexels.com/1234-image.jpg 'Der Winter ist kommen' der-winter.jpg
//
// 1. download content image from link and save it in workbench
//
/*
download ( img-url, 'dist').then(() => {
      console.log('done!');
});
*/
// 1.1 umbenennen zu titel (der-winter.jpg)
// --> fs
// 3. filter/color correction (
// --> sharp?
// --> oder CSS, dom-to-image
// 2. copy to hero_workbench
// 2.2 rename to hero name (hero_der-winter.jpg)
// 2.3 Dom-to-image render CTA with Title
// 4. resize it content 
// 4.1 resize heros
// 5. optimization workbench (content)
// 5.1 optimize workbench_heros
// 6. sort everything in the correct folders
