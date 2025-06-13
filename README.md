# Terrabyte 11ty Template

The purpose of this project is to make it easy to get started when building a Terrabyte website using 11ty. [11ty](https://www.11ty.dev/) is a static-site generator that makes the website build process more efficient while leveraging components. For more information on using 11ty, please visit their [docs](https://www.11ty.dev/docs/).

**NOTE:** Creating a website with 11ty requires Node.js and npm on your machine.

## Process

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

- `_site`: This is the web-ready content rendered by the 11ty build process. It will be rendered in your new project as well.
- `node_modules`: This is a folder containing node-specific files. These won't be committed in GitHub nor should they be copied from project to project (use npm for this).
- `package.json` and `package-lock.json`: You just changed the `package.json` file, no need to overwrite it!
- `README.md`: Your new project requires it's own README :)

