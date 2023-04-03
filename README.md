# Microsoft Store Shields API
Showcase how your app is doing using this API that provides endpoints for shields badges. This makes use of the official Microsoft Store API to get analytics information.

Currently, the API has the installs endpoint ready to use. Just go to https://shields.io/endpoint and use `https://yourapi.address/AppID/installs` as the endpoint URL. And you can easily expand this API using information available in the MS Store API documentation: https://learn.microsoft.com/en-us/windows/uwp/monetize/access-analytics-data-using-windows-store-services

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1K06VY)

## Environment variables
| Variable | Required | Description |
| :---         |     :---:      | :---          |
| **PORT**   | No     | Uses port 8080 by default    |
| **TENANT_ID**     | Yes      | ID of your Azure AD tenant. You can find this in Partner Center settings under Tenants. If you don't have one, you can create it from this page.      |
| **CLIENT_ID**     | Yes       | Client ID of your Azure AD application   |
| **CLIENT_SECRET**     | Yes      | Client secret of your Azure AD application      |
