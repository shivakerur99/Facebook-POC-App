### Facebook HelpDesk POC
As i implemented these App which consists user signup and signin and data is stored in (mongodb) database and have connection page also which is able to connect facebook app api through its id and next page chat/messenger page where user and client can chat to resolve issues and lastly endpage to disintegration of facebook account 

#run client-side first
npm install

npm install axios 

npm start

#run server-side 
cd server

npm install

node index.js


##As due to my exams i couldn't able to finish this app within richpanel time frame as for handling conversations and storing them into database these are some steps we follow

To extract messages from the Messenger API, you need to set up a webhook application that listens for events from the Messenger platform. Here's a step-by-step guide on how to achieve this:

Set Up Webhooks on Facebook Developer Dashboard:

Go to your Facebook Developer Dashboard.
Select your app.
Navigate to the Messenger settings.
Under Webhooks, click on "Add Callback URL."
Provide a callback URL where Facebook can send webhook events. This URL should be accessible via HTTPS.
Subscribe to the messages webhook event.
Implement Webhook Endpoint in Your Server:

Create an endpoint on your server to handle webhook events from Facebook. This endpoint will receive POST requests from Facebook whenever there's an event, such as a new message.
Parse the received payload to extract relevant information, such as sender ID, message text, timestamp, etc.
Process the received message as per your application's logic.
Verify Webhook:

Facebook will send a verification request to your webhook endpoint. Respond to this request with the challenge sent by Facebook to verify your webhook.
Handle Messenger API Calls:

Use the Messenger API to interact with the messages. You can use the Graph API to retrieve messages, send messages, and perform various other actions.
Authenticate your requests with an access token obtained through the Facebook Login flow or by using a Page access token.