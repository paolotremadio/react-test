# About

This is a demo project built with:
- Javascript
- Typescript
- React
- React Hooks
- React Testing Libary + Jest
- Formik (it is not really necessary for such simple example, but it is interesting from a testing point of view)
- Next.JS (including SSR)
- Webpack (comes with NextJS)
- Material UI (with a custom theme)
- GraphQL
- Apollo Client
- Apollo Server
- Eslint
- Github Actions
- Serverless (on Vercel which is technically a set of Lambdas on AWS)
- CI & CD on push (for `master` and `testing` branches)

The initial value of the form is read from a Graph query. The label in the form is updated ONLY when the form is submitted.

This simple test is designed to showcase all the listed technologies as well as testing strategies.

The interface is built on Material UI with a very custom theme that looks less like the Material visual language. This is on purpose to showcase my MUI theming skills.

The app is built following [The 12 Factor App principles](https://12factor.net), it can be built once and run in any env, from dev to production.

# What is missing?
## Docker
There's no Docker as part of this demo as it runs in serverless. I've been using Docker for years on multiple projects.

## Redux
Redux has long been my favourite when it comes to state management. I believe Redux is important on complex UIs with a lot of interactions or on Single Page Apps (SPA). I kept this demo simple and focused on Hooks instead. 

## Styled Components
They're not far off from the styled Material UI components of this demo. The concept is still the same: CSS in JS, just a different implementation. Styled Components also use the React context for theming (as Material UI does).

## Sass
I've focused on CSS in JSS. SASS is CSS after-all with more functionality. It is fairly easy to code SASS files so I've decided not to do so in this demo for the sake of simplicity.

## React Native
I'd be happy to provide code for that. This is a web demo so there's no React Native, however many of the same concepts demoed here still apply to RN.

## AWS, Terraform
I kept the demo simple; it deploys to Vercel and so it does not need AWS nor Terraform. I have years of experience in both.

## Microservices
This demo as a simple GraphQL endpoint, it doesn't get much more micro than that 😂. Jokes aside, the "backend" part of this demo is written in GraphQL on Apollo; Apollo provides Federation to split complex domains into microservices. It takes care of aggregating data without the client having to know where it comes from. This demo is just the start of a micro service (and it runs in a Lambda too)


# Why Javascript, Jsx and Typescript all together?
The purpose of this demo app is to showcase my skills. Some companies use vanilla Javascript, some others use React (JSX) and others use Typescript. I've tried to showcase examples of each.


# Hire me
If you like what you see, just drop me an email 😉

Don't forget to [check my website](https://paolotremadio.com)
