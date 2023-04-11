# [Presto - Transform your ideas with AI](https://presto-mauve.vercel.app/)

Presto is an AI-powered tool that can convert hand-drawn scribbles to quality sketches, photos, paintings, and more to help you quickly iterate on ideas.

Built using [Next.js](https://nextjs.org), [TypeScript](https://typescriptlang.org), and [Tailwind](https://tailwindcss.com).

Powered by [Vercel](https://vercel.com), [Replicate](https://replicate.com), and [Upload](https://upload.io).

[Try it yourself!](https://presto-mauve.vercel.app/)

![](./demo.gif)

## How it Works

Presto uses an ML model called [ControlNet](https://github.com/lllyasviel/ControlNet) to convert hand-drawn scribbles to photos and sketches. This application provides the ability to draw a scribble, or upload an image of a scribble, along with a 1-3 word description of what you draw which will be converted using ControlNet. The ML model is hosted and run through [Replicate](https://replicate.com). Uploaded scribbles are stored on [Upload](https://upload.io).

## Deploy

Run your own version of Presto by deploying on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhaardikk21%2Fpresto)

## Running Locally

### Clone the Repository

```
git clone https://github.com/haardikk21/presto
```

### Install pnpm and dependencies

If you don't already have `pnpm`, install it by following the guide here - [https://pnpm.io/installation](https://pnpm.io/installation)

Then, install the dependencies

```
pnpm install
```

### Get Replicate API Key

1. Go to [Replicate](https://replicate.com) and make an account
2. Click on `Account` in the top right and take a note of your `API Token`

### Get Upload.io API Key

1. Go to [Upload](https://upload.io) and make an account
2. Click on `API Keys` in the top right and take a note of your `Public API Key`

### Store API Keys in .env

Copy `.env.example` to `.env` and add `REPLICATE_API_KEY` and `NEXT_PUBLIC_UPLOAD_PUBLIC_KEY` that you got from the above steps.

5. Run the application

```
pnpm dev
```

The app will now be available at [http://localhost:3000](http://localhost:3000).

## Contributions

Contributions are open to all. Feel free to open issues and/or pull requests.

## Contact

Reach out to me on [Twitter @haardikkk](https://twitter.com/haardikkk) if you have any questions, ideas, or suggestions!

## Acknowledgements

- [@nutlope](https://twitter.com/nutlope) for inspiration through RoomGPT

## License

This project is licensed under the open source MIT License.
