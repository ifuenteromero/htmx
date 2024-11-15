# [HTMX](https://htmx.org/)

-   HTMX is a library that allows you to accesss modern browser features directly from HTML, rather than using javascript. It gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attibutes.
    [WebSockets](https://chatgpt.com/share/673778c5-ee14-800f-837f-82db2bc8f793)

-   In 2023, it ranked 2nd in the JS Rising Stars in the Front-End Frameworks category.
    [Front end frameworks](https://risingstars.js.org/2023/en#section-framework)

-   Add VS Code plugins
    HTMX Attributes for IntelliSense
    Live Preview

-   The core of htmx is a set of attributes that allows you to issue AJAX requests directly from HTML
    [AJAX vs HTTP requests](https://chatgpt.com/share/6737777b-0f18-800f-9d98-6d3567999f02)

    -   hx-get
    -   hx-post
    -   hx-put
    -   hx-patch
    -   hx-delete

-   [hx-trigger](https://htmx.org/docs/#triggers)
    hx-trigger="keyup changed delay:500ms"
    hx-trigger="every 1s"
    hx-trigger="click[ctrlKey]"
    hx-trigger="revealed"
    hx-trigger="load"

-   hx-target: where to render the result of a an hx-get
-   hx-swap: innerHTML, outerHTML, beforebegin, beforeend, delete (borra el target después de hacer la request)
