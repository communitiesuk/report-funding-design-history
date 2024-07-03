---
title: Improving the experience for users when downloading monitoring data 
description: When users download data from Find monitoring data (Find), they use filters to choose which data they’d like to be included in a data file (Microsoft Excel or JSON). 
date: 2024-06-20    
tags:
  - data
---

When users download data from Find monitoring data (Find), they use filters to choose which data they’d like to be included in a data file (Microsoft Excel or JSON). Depending on the amount of data, the file may take a few seconds to several minutes to download. This could cause confusion for the user as they cannot see any visual on the page to indicate that the download is in progress. The risk is that they may leave the page or try to download the data again. 

In addition, as fund data on Find increases when more funds are added to our services, we expect that the unfiltered data set might time out entirely. This would obviously be a poor experience for the user. 

## What we changed

Several suggestions were made by our development and design teams to solve this problem. For example, we considered including adding a ‘spinner’ on the page to give a visual indication that the download was in progress, but there were concerns about how accessible this would be for all users, so this idea was not taken forward. 

Instead, we decided to direct the user to a confirmation page as soon as they click on the button to request the data. The confirmation page explains that they’ll be receiving an email with a link to download the data, and that it may take up to 5 minutes to come through.  

To make this change, we: 
- added and improved content on the filters page so users understand what will happen 
- introduced a confirmation page so the user knows their download request has been received 
- removed the functionality for the file to be downloaded in the browser 
- improved the content in the email users receive (sent through Notify) 

We are hopeful that these changes will improve the experience for users and plan to test this in future. 

## Adding content to the filters page

We updated the title of the page to ‘Get monitoring and evaluation data’ to more accurately reflect the users’ action on the page. They are requesting a data download it at this point, not downloading it.

We also changed the content on the button to ‘Confirm and request data’ to make it clear they are not downloading anything now. We added content above the button so that the user knows what will happen when they click on it.  In addition, we ask which file type they need using radio buttons rather than a dropdown. 

![Screenshot of a page title ‘Get monitoring and evaluation data’.](05-filter-page.png)

## ‘Request received’ confirmation page 
As soon as the user clicks on ‘Confirm and request data’ they are taken to a confirmation page to let them know that: 

- their request has been received 
- they will receive an email within 5 minutes containing a link to download the data 
- they can contact us if they need help  

## Improving the content in the email  
We improved the formatting and content in the notification email. We send this email to the user once the download is ready to be accessed. 

![Screenshot of a page title ‘Download your file email’.](04-email.png)


## Future considerations 
We have not tested this interaction. We need to check that our method aligns with user needs and that users fully understand the action they are taking.  

More generally, we need to look at solutions to speed up the downloading of data from Find, especially as we onboard more funds. We need to do more research around how the filters are used and how users want to access the information. 

The service also needs a full content audit which we plan to return to in the future.

We plan to add a bulleted list to the email to show the user which filters they’d selected to generate the report. By playing back this information to the user, we feel this will help them to see which report they’d requested.