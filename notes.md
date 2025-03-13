# CS 260 Notes

[My startup](https://startup.findmymeal.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

I learned how to deploy a server and make it accessible through a custom domain. I researched the steps involved in deploying a server, configuring DNS settings, and linking it to a custom domain name. This involved setting up hosting, ensuring the server was running correctly, and testing that the domain pointed to the correct location. 

## HTML Notes

To complete this assignment, I needed to learn how to structure and build multiple HTML pages with proper elements and functionality. I familiarized myself with key HTML tags like title, header, nav, form, input, button, and footer to ensure each page had the right layout and interactive components. I also had to learn how to create navigation links to connect the pages and add external links, such as one to GitHub. I also explored how to incorporate a 3rd party API, including what options I had for which API to use, and how to integrate images into the pages.

## CSS Notes

I learned how to style and format a webpage using CSS to achieve a polished and responsive design. I learned about how to style the header, footer, and main content elements, changing background colors and adjusting borders to improve the layout. For the navigation elements, I learned how to remove default styling from list items and add hover effects. I also explored how to make the webpage responsive by adjusting font sizes and page layout using CSS media queries to accommodate different window sizes. To improve the look of form elements and buttons, I learned how to work with the flex display mode.

For consistency across the pages, I imported external fonts to achieve a uniform look and updated the color of various text elements for better contrast and readability. Additionally, I worked on styling images by adjusting their sizes for different screen sizes and rounding their edges.

Viewport meta tag: used to tell the browser not to zoom in the content for small screens  
Display types: none, block, inline, flex, grid  
Flex: (grow) (shrink) (basis)  
@media tag: applies different css rules based on a trigger  


## REACT Notes

I learned how to port an existing project to React. I had to adapt the HTML and CSS components to fit with React. This included changing HTML classes to classNames and adding more specificity to my CSS. I also had to set up Vite and React and reorganize the application to match Vite's expected pattern. I created a React router to manage different components and converted the HTML files into React components with appropriate CSS references.
BrowserRouter imported from React: uses NavLink components to swap which components are rendered on the page. The different components that can be rendered are defined with Route components.  


## REACT Notes
I learned how to implement reactivity in React. Throughout this process, I used React Router to structure the application's navigation while managing state dynamically with useState and useEffect. Additionally, I integrated mocked solutions, such as simulating WebSocket messages or using LocalStorage, to create a functional prototype.   

useNavigate(): can navigate to a given path within a function.   
searchParams(): can use parameters in the url path to pass information from one page to another.

## Service deliverable
I developed a backend HTTP service using Node.js and Express to handle requests for the application. The backend is powered by an index.js file that initializes and runs the Express server. To serve frontend assets, I implemented static middleware to pull content from the public directory. I integrated calls to third-party APIs to fetch recipe data for the results page. The backend includes service endpoints for user login/logout and managing favorite recipes, allowing users to add, retrieve, and remove their saved recipes.

event.preventDefault(): needed to stop buttons from making a GET request and breaking React.  
.json(): converts json to a javascript object

