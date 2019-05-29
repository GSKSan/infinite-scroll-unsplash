global.fetch = require('node-fetch');
const config = require ('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');


const unsplash = new Unsplash({
    applicationId : "a88500284d742e468eb5904deb7e38db59b4bdf4df673c73e643dc65c6c5b6e7",
    secret :"9f6d5018d45c47884245f1b957092a6658d37a8fd79e266a72807da28837a553",
    callbackUrl:config.get('CALLBACK_URL')
});




const app = express();

app.get('/api/photos',(req,res)=>{

unsplash.photos.listPhotos(1,30)
    .then(toJson)
    .then(json => res.json(json))
}
);

const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on ${PORT}`))