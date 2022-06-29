An e-commerce website available at: https://shop.gkarcevskis.com

Tech used:
- React/functional components
- Typescript
- React Router
- Redux
- Formik and yup for login/registration forms
- Styled-components
- material ui icons
- framer motion for slider on the main page and the product page
- NodeJs as a backend language
- Express
- PassportJS for email authentication
- PostgreSQL
- Express session
- Redis for session storage
- Nginx for web server, also serves as a reverse proxy that directs to the backend
- AWS EC2 instance running Ubuntu
- Certbot for ssl certificate

I tried to use a very simple design for the frontend so that I can focus more on the functionality of the website.
Ever since I learned React I cant see myself not using it for my projects and I feel the same way about using typescript. 
Typescript can create a few headaches sometimes, but in the end it makes writing the code more safe and helps to better understand what data is coming from backend or some function. 

For this project I really wanted to use Redux, instead of a different alternative. The reason for this was that I know it is a very popular library, and before I didnt use it in any real projects. I did learn about it, and used it in some small projects, but wanted to implement in a bigger project. 
Overall, the experience using it was not bad, but I am now excited to try to use something else like Recoil. Maybe in my next project. 

My personal preference is css modules, since I like scss in a separate dedicated file. I believe that it makes it more readable and understandable. Also I feel that scss provides more functionality rather that trying to create that functionality with js. 
Nevertheless, I was receiving a lot of suggestions to keep using styled components and that they can offer more. Also, css modules is the same old css/scss which is already known, but styled components is a bit different approach. Thus, I decided to try to learn and explore more about styled components. 

When creating the slider I really wanted to make one image slide out while at the same time next one slides in. It was relatively easy to create a slider where the images just disappear and appear, but I wanted exactly that nice sliding animation. 
When I tried creating it on my own I ended up trying to create a complicated logic and wasting a lot of time. Thats when I decided to give a try for some animation library. 
After some research I stopped at framer motion. It is exciting how complex and well polished animations can be done in just a few lines of code. 
Thus, after scrolling through the docs and tinkering a bit with the configuration I was happy with the result.

Besides the frontend I wanted to focus a lot on the backend and bring it to the next level compared to my previous projects. 

I have written several nodejs express rest api's, but usually I am using MongoDB and hosting it on heroku.

For this project I tried to learn SQL to use PostgreSQL. An e-commerce website seemed a good project to explore SQL, due to several related data, like the products linked to categories and to the cart of different users. 
I loved using PostgreSQL and all the additional functionality it brings, while still being relatively easy to use(at least in the very beginning, I am sure it gets very complicated further down the road). 

For user authentication I used passportjs, because it offers many different functionality while still being very transparent and flexible. 
With ready to use authentication, you never see what is actually going on, how it is encrypted and compared. But passportjs leaves the flexibility of implementing it on your own, but providing several helper methods which simplify the process a lot. 
But also it has many authentication methods, and if the project grows then I will be able to add other auth methods. 

I used express session for the authentication as well as storing some user and cart data. JWT authentication is still a very dark area for me, and I know that if its implemented without a good understanding it might be very unsecure. Thats why for now I choose to go with session and a secure cookie. 

I used Redis for the session store. Redis is very easy to use and very fast, thats why I really wanted to use it. 
i havent used it in a bigger project before, but I have played with it before. Thats why I really wanted to use it in this project. 
Later I would love to try to add caching besides just using it for session store. Caching some information, like frequently displayed products, could make the app faster. 

Previously, I always hosted my backend on heroku. Heroku is very simple and straightforward service that just allows to host it easily. 
And thats what I did at the start of this project. I had my backend code hosted there and also the Redis instance was there. It was also very easy to set up Redis there. 
But then I left for a vacation and after a week I come back to see that my backend is not available anymore. Everything was working fine before, but now i was receiving a lot of errors and could not see the reason why. Thats when I decided that ok its time to move to AWS. 

I have been using AWS for many different projects, I even took a course on Udemy for AWS Certified Solutions Architect Associate. I love using AWS, I think it offers a lot of interesting services with a lot of flexibility and ability to scale. Thats why I always wanted to learn and use more of it. 
Besides I love to tinker and use some linux. 

So, I moved my backend code to an EC2 instance, opened it to public. It took a bit of modification and in the end it took me more time than I expected, but I loved the experience and I am proud of the result. 
This time I wanted to fully configure my own Nginx server. Thus, I hosted the frontend application on the same EC2 and set up a reverse proxy pointing to the port where the backend is running. I wanted to keep everything on one instance to save some resources. 

Certbot made it very easy to install a free ssl certificate. Recently, I helped my girlfriend to create a Wordpress website (she wanted to do everything on her own, I just helped with some more technical stuff). The website was hosted on a managed hosting service. And that service wanted to sell us the free certificate for 12 euro. I was surprised how they are trying to sell something thats for free for such a high price. Luckily I could just import a certificate for free, so I just generated one and imported it. 

In the future I would like to polish the UX a bit more, I know there must be some bugs crawling around. 
Definitely improve the design and maybe use some design framework for it, because they look great. 
Add more auth methods like Facebook login. 
Maybe try to use Stripe to actually make a checkout experience. 
There is a search functionality, but for an e-commerce website there could be much more functionality in it. Also it needs debouncing. 
