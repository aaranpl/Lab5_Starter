Aaran Patel 

EXPOSE SITE: https://aaranpl.github.io/Lab5_Starter/expose.html
EXPLORE SITE: https://aaranpl.github.io/Lab5_Starter/explore.html

Q1- No since the "message" feature involves multiple components working together, the UI, network requests, and the recipient's client. So a unit test can't capture those interactions. An integration or end-to-end test would be more appropriate.

Q2-Yes because this is an isolated, self-contained rule (input string to boolean/truncation result) with no external dependencies. A unit test can directly verify that inputs over 80 characters are rejected and inputs under 80 are accepted.
