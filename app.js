const express = require('express')
const axios = require('axios')

// Get environment variables
require('dotenv').config({ path: require('find-config')('.env') })

// Initialize the app
const app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Get installs of specified app ID
app.get('/:appId/installs',function(req,res){
    let appId = req.params.appId;
    const params = new URLSearchParams({
        grant_type: `client_credentials`,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        source: `https://manage.devcenter.microsoft.com`
    });
    axios.post('https://login.microsoftonline.com/'+process.env.TENANT_ID+'/oauth2/token',params)
    .then(function(response){
        axios.get('https://manage.devcenter.microsoft.com/v1.0/my/analytics/installs?applicationId='+appId,{
            headers: {'Authorization': `Bearer `+response.data.access_token}
        })
        .then(function(response){
            res.json({
                "schemaVersion": 1,
                "label": "ms store downloads",
                "message": response.data.Value[0].successfulInstallCount.toLocaleString(),
                "color": "brightgreen",
                "cacheSeconds": 3600
            }) 
        })
        .catch(function(error){
            console.log(error)
        })
    })
    .catch(function(error){
        console.log(error)
    });
})

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Server is running on port " + port);
});