# Backlog

## UI: Re-render the Google Map in the background of the contact section when user resizes their browser window

**issue:** When the user resizes their window, the map is not centered on the interval between Eugene and Chardonnay anymore

**solution:** Listen to window events (such as onResize) to re-initialize the map.

**caveat:** Make sure to wait that the user is done with resizing the window before running the script; otherwise, the map will re-render too many times. The onResize event is fired dynamically and usually multiple times before the user releases the button of the mouse. I should probably rely on a different JavaScript Event.

## Lambda: Check that the captcha that is sent in the payload matches the captcha that was displayed to the user

**issue:** When the user sends a message via the UI, they have to enter a captcha to validate that they are not a bot. This check is performed in the client. The API should perform its own check on the captcha in order to reduce the potentiality of misusing the endpoint.

**solution:** Use the captcha ID and the user input to check if the user passed the test successfully.

**caveat:** Make sure that the API rejects any malformed request (such as an ID that does not reference an existing captcha or the lack of user input).

## UI: The mobile menu should reveal/hide with a CSS animation

**issue:** When the user clicks on the hambuger icon, the mobile menu immediately shows up. It would be great if it (dis)appeared with an animation

**solution:** Use CSS `animation`/`transition`/`@keyframes`.

**caveeat:** I'm not sure if animating the mobile menu when it disappears is possible due to the no-JS mechanism used to display/hide the menu.

