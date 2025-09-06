# Terrabyte 11ty Template

The purpose of this project is to make it easy to get started when building a Terrabyte website using 11ty. [11ty](https://www.11ty.dev/) is a static-site generator that makes the website build process more efficient while leveraging components. For more information on using 11ty, please visit their [docs](https://www.11ty.dev/docs/).

Below, follow the process that works best for your project. It's preferred to create a subtree of this repository in order to track changes to the template, but in outlying circumstances, you may need to manually copy/paste this template into your project.

**NOTE:** Creating a website with 11ty requires Node.js and npm on your machine.

## Checkout/Subtree Process

[steps have yet to be documented in detail...]

### How to Use

First, bring this template into your project by creating a subtree. We recommend bringing the files into a /template folder to manage file diffs later.

If you are starting a new project, you can copy all of the content from the template into the root. If you already have content, be sure to carefully diff as you could accidently overwrite your content.

Use `site.json` to control fonts, pixel styles, and theme color. For a detailed set of data that can be in this file, see [/docs/site.bak.json](/docs/site.bak.json).

### Version History
- v1.0: Initial release
- v1.1: Added styleType logic, fontFamily support


## Manual Copy/Paste Process

DigitalOcean has a great [guide](https://www.digitalocean.com/community/tutorials/how-to-create-and-deploy-your-first-eleventy-website#step-2-choosing-a-templating-language) on building your first 11ty website. This guide will use their steps, but cater the process to building a Terrabyte website using the files included in this repo.

### 1. Create repo & checkout

Create a project repository in GitHub as per-norm. Initialize within GitHub by adding a README, and check it out to your local device through the GitHub CLI.

### 2. Initialize project

Within the repo's root folder, run the following commands to create a new Node.js project...

```
npm init -y
```

...and install 11ty as a dependency.

```
npm install -D @11ty/eleventy
```

### 3. package.json

In the created `package.json` file, replace the existing `scripts{}` object with the following `scripts{}` object:

```
...
  "scripts": {
    "build": "eleventy",
    "start": "eleventy --serve"
  },
...
```

After saving the `package.json` file, run the following command to build the project (we'll add the website content in the next step).

```
npm run build
```

### 4. Drop in content

From here, you should be able to copy the content within this template project into your new repo.

Caveats that _should not_ be copied include:

- `.git`: This is THIS project's git history - you'll make your own in your new project.
- `_site`: This is the web-ready content rendered by the 11ty build process. It will be rendered in your new project as well.
- `node_modules`: This is a folder containing node-specific files. These won't be committed in GitHub nor should they be copied from project to project (use npm for this).
- `package.json` and `package-lock.json`: You just changed the `package.json` file, no need to overwrite it!
- `README.md`: Your new project requires it's own README :)

### 5. Install dependencies

Before building the project again, you will need to install dependencies referenced in the template project. This includes:

#### Cheerio

Cheerio is used to create accessibility table of contents per-page. To install the dependency, run the following command.

```
npm install cheerio
```

### 6. BUILD!

At this point, you should be ready to build your website as you intend. Whether you are dropping in content from an old project (converting to 11ty) or starting fresh, don't forget to:

Run the build process after making changes to `.eleventy.js` or other build files.

```
npm run build
```

And run the local server in order to preview changes as you make them to site files.

```
npx @11ty/eleventy --serve
```