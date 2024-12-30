/*
1. What is Next.js?
Answer:
Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), and other features to improve React applications' performance and SEO. It is built on top of React and enables functionalities like routing, code splitting, and automatic static optimization.

2. What are the benefits of using Next.js?
Answer:

Server-Side Rendering (SSR): Next.js allows rendering React components on the server, improving SEO and performance for the initial page load.
Static Site Generation (SSG): Pre-builds pages at build time for faster load times and better SEO.
API Routes: Next.js allows creating backend API routes within the same project, eliminating the need for an external backend.
Automatic Code Splitting: Each page is bundled separately, which reduces the initial load time.
File-based Routing: Pages are automatically routed based on the file structure in the pages directory.
Built-in CSS and Sass support: Easily support CSS and Sass with built-in support.
3. What is the difference between SSR (Server-Side Rendering) and SSG (Static Site Generation) in Next.js?
Answer:

SSR (Server-Side Rendering): The page content is generated on each request on the server. This is useful when content needs to be updated dynamically based on user interaction or data changes.

javascript
Copy code
export async function getServerSideProps() {
  // Fetch data here and return as props
  return { props: { data } };
}
SSG (Static Site Generation): The page content is pre-generated at build time. This is ideal for static content that doesn’t change frequently, providing fast page loads.

javascript
Copy code
export async function getStaticProps() {
  // Fetch data here and return as props
  return { props: { data } };
}
4. What is the purpose of getServerSideProps in Next.js?
Answer:
getServerSideProps is an asynchronous function used in Next.js to fetch data on the server-side before rendering the page. It runs on every request and allows for dynamic content generation.

javascript
Copy code
export async function getServerSideProps(context) {
  const data = await fetchDataFromAPI();
  return { props: { data } };
}
5. What is the purpose of getStaticProps in Next.js?
Answer:
getStaticProps is used to fetch data at build time in Next.js. The data fetched is pre-rendered into HTML during the build process, making it ideal for static content.

javascript
Copy code
export async function getStaticProps() {
  const data = await fetchDataFromAPI();
  return { props: { data } };
}
6. What is getStaticPaths and when should you use it?
Answer:
getStaticPaths is used with getStaticProps for dynamic routes. It allows Next.js to know which paths should be pre-rendered at build time for dynamic pages (e.g., blog posts, product pages).

javascript
Copy code
export async function getStaticPaths() {
  const paths = await fetchAllPaths(); // fetch list of paths
  return {
    paths,
    fallback: false, // or 'blocking', or true
  };
}
7. What is the difference between getStaticProps and getServerSideProps?
Answer:

getStaticProps: Fetches data at build time, which makes it ideal for static content that doesn't change often. The page is pre-rendered and served as a static HTML file.
getServerSideProps: Fetches data on every request, which is suitable for dynamic content that needs to be updated frequently.
8. What is the use of Link component in Next.js?
Answer:
The Link component in Next.js is used to navigate between pages without reloading the browser. It provides client-side navigation for faster page transitions.

javascript
Copy code
import Link from 'next/link';

const Home = () => (
  <div>
    <Link href="/about">
      <a>Go to About</a>
    </Link>
  </div>
);
9. What is the purpose of next/head?
Answer:
next/head is used to modify the <head> section of the HTML document in a Next.js page. It allows you to add metadata like title, description, and other meta tags dynamically.

javascript
Copy code
import Head from 'next/head';

const Page = () => (
  <div>
    <Head>
      <title>My Page Title</title>
      <meta name="description" content="Page description" />
    </Head>
    <h1>Hello, World!</h1>
  </div>
);
10. What is a dynamic route in Next.js?
Answer:
A dynamic route in Next.js allows creating routes based on the content, such as a blog post or product page, by using file names with square brackets [param]. The dynamic part of the URL is captured as a parameter.

Example:

pages/posts/[id].js would capture dynamic URLs like /posts/1, /posts/2, etc.
javascript
Copy code
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Post ID: {id}</h1>;
};
11. How does Next.js handle static file serving?
Answer:
Next.js serves static files like images, fonts, and other assets from the public directory. Files in the public folder are accessible at the root of the application.

For example, if you have a file public/images/logo.png, it can be accessed with the URL /images/logo.png.

12. What is the useRouter hook in Next.js?
Answer:
The useRouter hook in Next.js provides access to the router object, allowing you to programmatically navigate, access query parameters, and manage routing state within a functional component.

javascript
Copy code
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

  return <button onClick={navigateToHome}>Go Home</button>;
};
13. How do you add custom error pages in Next.js?
Answer:
You can add custom error pages by creating the following files:

pages/404.js: Custom 404 error page for page not found.
pages/_error.js: Custom error page for handling other types of errors.
Example of 404.js:

javascript
Copy code
const Custom404 = () => <h1>Page Not Found</h1>;

export default Custom404;

*/