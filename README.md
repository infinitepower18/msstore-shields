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

## Setting up the Azure AD application
1. Log in to https://portal.azure.com using your Azure AD credentials.
2. On the home page, click Manage Azure Active Directory. Then click on app registration which can be found on the left hand column and then new registration.
3. Enter any name you want and click Register.
4. Now go to your app you just created, select certificates & secrets and make a new secret. This secret is what you need for the CLIENT_SECRET variable. You can also find your client ID in the overview page.
5. Go to Partner Center settings, user management, Azure AD applications. Add the app you just created however on the permission screen, click customize permissions, and only select the analytics permission for the apps you want the API to access.

![Screenshot 2023-04-03 122956](https://user-images.githubusercontent.com/44692189/229497307-1c154197-02c3-437b-a0d7-8be314fe7a3c.jpg)
