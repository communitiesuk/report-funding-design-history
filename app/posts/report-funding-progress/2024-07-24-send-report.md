---
title: Giving users a way to send a report to a Section 151 Officer for review 
description: We know from our previous testing and feedback gathering that there is a need for grant recipients to be able to share a funding progress report with others.
date: 2024-07-24
tags:
  - report
  - section 151 officer 
related:
  items:
    - text: Link to specific pages
      href: 
---

We know from our previous testing and feedback gathering that there is a need for grant recipients to be able to share a funding progress report with others. This is so they can:
- collaborate on the creation of the report - for example, with people responsible for financial information
- have the report signed off by the correct people in their organisation - for example, a Section 151 Officer

This relates to two validated user needs:
- **As a** reporter - **I need** to share the report - **So that** I can collaborate on it have it signed off and make sure all stakeholders have oversight

- **As a** reporter - **I need** to share the report with the people responsible for signing it off (for example, a Section 151 Officer) - **So that** I can make sure I've followed the right processes when submitting the final report 

## The current sign off process

We know that the sign off process is currently inconsistent from one fund team to another. There is no audit trail within our digital service as this is mainly done via conversations and manual emails between the reporter and the person signing off the report. Some fund teams require a wet signature while others don’t. 

In our MVP version of submit, a reporter can upload an amended report over the top of an existing one. This is problematic as there’s a risk a report could be updated by the reporter after it has already been signed off by the person responsible. 

We hope that our solution will speed up the sign off process for both the reporter and the person signing off the report. We also anticipate that our automated emails, reminders and audit trail will also help users to submit signed off reports on time.

## What we did

### 'Sending' vs 'submitting'
We introduced a basic permissions model where a reporter can send a report for review, but they cannot submit it. The person signing off the report, the Section 151 Officer in this scenario, can use a magic link to sign in and view or download the report. They cannot make any changes to the report - they can only sign it off or, if there are any issues, decline it and include a reason.

### What the reporter sees
When the reporter has completed all parts of the report from the task list, they will be able to review it and ‘Send report for review’.

![Screenshot of a page title ‘Send report for review’.](01-check-your-answers-reporting-funding-progress.png "Check your answers")



Once the report has been sent, the status of the report on the task list would change to ‘Sent for review’ and the reporter will be unable to make any changes.

![Screenshot of a page title ‘Report sent for review confirmation page’.](02-report-sent-for-review-reporting-funding-progress.png)

All reporters will receive an email confirming the report has been submitted for review. This email is triggered automatically (as are all emails in these flows).

![Screenshot of a page title ‘Email to confirm the report has been sent for review’.](03-your-report-has-been-sent-for-review.png)

If there are no problems and the Section 151 Officer signs off the report, the reporter will receive an email to let them know. The report will move from the task list to the ‘Completed reports’ list.

![Screenshot of a page title ‘Report signed off’.](04_your-report-has-been-signed-off.png)

If the report is declined, the reporter will receive an email letting them know. The email includes the reason the Section 151 Officer gave when they declined the report. The reporter will be able to edit the report from the task list and resend for review when they have made any changes.

![Screenshot of a page title ‘Report declined’.](05-your-report-has-been-declined.png)


### What the Section 151 Officer sees
When the reporter has ‘Sent report for review', the Section 151 Officer will receive an email to let them know.

![Screenshot of a page title ‘Report ready for review’.](06-review-needed-funding-progress-report.png)

The Section 151 Officer will be able to follow the magic link from the email where they can sign in to review the report and either sign it off or decline it. They will not be able to access any other parts of the service or make any changes to the report.

![Screenshot of a page title ‘Sign off and submit report’.](07-sign-off-and-submit-report.png)


If the Section 151 Officer has no queries, they can sign off the report by selecting ‘Sign off and submit report’.

![Screenshot of a page title ‘Report signed off confirmation page’.](08-report-signed-off-and-submitted.png)

The Section 151 Officer will receive an email to confirm that they have signed off and submitted the report.

![Screenshot of a page title ‘Email confirming report signed off and submitted’.](09-you-signed-off-a-report.png)

If they have any queries or have noticed a problem, they can decline the report by selecting ‘Decline sign off’. When they do this, they will have the opportunity to tell the reporter why they have declined the report by entering information into a free text box.

![Screenshot of a page title ‘Report declined reason’.](10-why-have-you-declined-this-report.png)

The Section 151 Officer will see a confirmation page to confirm that they have declined the report and given advice about what will happen next.

![Screenshot of a page title ‘Report declined confirmation page.](11-report-declined.png)

The Section 151 Officer will receive an email to confirm they have declined the report. We display the reason they gave in the email for their reference.

![Screenshot of a page title ‘Report declined email’.](12-you-declined-a-report.png)

At this point, the reporter will be able to make changes to the report and resend for review.

## Future considerations

We are currently half way through a round of user research where we are testing our designs. We will make iterations when the testing has been completed. We have some considerations of things we might want to change and test in the future.

### How we display the report for review
The design and development teams have already started conversations about how we will display the report for review. Both the reporter and the Section 151 Officer need to review the report before sending or submitting. We are exploring:
- a way for users to download the report and share it
- showing a summary of the report on the page plus a download
- showing the entirety of the report in a flow so each section can be reviewed in turn

Allowing users to review the report section-by-section could help the person signing off the report to be more specific about which part of the report needs attention. For example, we could allow the person signing off to highlight a particular part of the report by selecting it from a list and then describing the issue in a free text box.

### Allowing more than one user to sign off the report
In our first iteration, more than one ‘Reporter' will be able to sign in and access the report to edit it and send it for review. Only one user, the Section 151 officer in this case, will be able to sign it off. 

We have heard in research that sometimes the deputy officer is given responsibility for sign off. We’ve also heard that other stakeholders, such as the Chief Finance Officer or Board Chair, can be involved in the sign off process. Having more than one user responsible for signing off adds in layers of complexity to the design and development of the flows, so we need more research to validate any user needs in this area before allowing more than one user to sign off the report.

### Allowing users to add or change details about the Section 151 Officer
For Submit MVP, we work with the fund teams to get a list of the grant recipients who will need access to the service to complete the reports. They are then added as users. In our first iteration, we plan to expand this list to include the Section 151 Officers. We can then add them as a user but with sign-off permissions only.

We need to consider if this is sustainable and look at alternative solutions. In the future, we may want to:
- ask the reporter to tell us who the Section 151 Officer is in a flow when they sign in (emailing the Section 151 Officer to confirm this)
- allow users to add other users who will be responsible for signing off reports
- allow users to change the details of the Section 151 Officer

### How we refer to reports
We are not yet sure on the naming conventions for reports. We have the reporting period as the title of the report at the moment, but there might be an alternative that users prefer. For example, they might want to refer to the report by the round of reporting, a reference number or something else. We will conduct more user research in this area.

### Notification emails
We may want to introduce more automated reminders when a report is approaching the deadline for submission. 