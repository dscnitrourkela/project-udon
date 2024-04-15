[![Starware](https://img.shields.io/badge/Starware-⭐-black?labelColor=f9b00d)](https://github.com/zepfietje/starware)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <!-- <a href="https://github.com/dscnitrourkela/project-unagi">
    <img src="images/logo.png" alt="Logo" width="130">
  </a> -->

  <h3 align="center">1999 Reunion</h3>

  <p align="center">
    The official repository for the website of reunion of 1999 alumini batch of NIT Rourkela.
    <br />
    <br />
    <a href="#">View Live</a>
    ·
    <a href="https://github.com/dscnitrourkela/project-unagi/issues">Report Bugs</a>
    .
    <a href="https://github.com/dscnitrourkela/project-unagi/issues">Add Features</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#contribution-guidlines">Contribution guidlines</a></li>
        <li><a href="#local-repository-setup">Local Repository Setup</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#dsc-nit-rourkela">DSC NIT Rourkela</a></li>
    <li><a href="#starware">Starware</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About The Project

This project is the official website for the reunion of 1999 alumini batch of NIT Rourkela. The website is built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/). The website is hosted on [Netlify](https://www.netlify.com/). The website is built using [Tailwind CSS](https://tailwindcss.com/) and uses [Cloudflare](https://www.cloudflare.com/) for DNS management.

The UI components are built using [Shadcn/UI](https://shadcn-ui.vercel.app/).

## Built With

Following technologies and libraries are used for the development of this website

-  [React](https://reactjs.org/)
-  [Vite](https://vitejs.dev/)
-  [Tailwind CSS](https://tailwindcss.com/)
-  [Shadcn/UI](https://shadcn-ui.vercel.app/)
-  [Cloudflare](https://www.cloudflare.com/)
-  [Redux](https://redux.js.org/)
-  [Firebase](https://firebase.google.com/)
-  [Netlify](https://www.netlify.com/)

## Getting Started

To setup the project locally the steps below.

### Prerequisites

-  [Node.js](https://nodejs.org/en/download/)


   ```sh
   # homebrew
   brew install nodejs

   # sudo apt (Debian based systems)
   sudo apt install nodejs

   # pacman (Arch Linux)
   pacman -S nodejs

   # module Install (Fedora)
   dnf module install nodejs:<stream> # stream is the version

   # yum (CentOS, Red Hat)
   yum install nodejs

   # windows (chocolatey)
   choco install nodejs

   ```

-  [PNPM](https://pnpm.io/installation)
   Install pnpm: If pnpm is not installed, you can install it globally using npm. Run one of the following commands:

```bash
npm install -g pnpm
```

or

> [!NOTE]
> Best way to install it is using `corepack`. It is recommended to use pnpm as the package manager for this project. It is faster and more efficient than npm and yarn.

-  [Git](https://git-scm.com/downloads)

```sh
  # homebrew
  brew install git

  # sudo apt
  apt-get install git

  # pacman
  pacman -S git

  # module Install (Fedora)
  dnf install git

```

### Contribution guidlines 🎃

---

Our Slack Community: [Slack Invite](http://bit.ly/NITRDevs) <br>

`Contributions are welcome 🎉🎉`

### Local Repository Setup

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1. **Fork** the repo on GitHub
2. **Clone** the project to your local system
3. **Commit** changes to your own separate branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

NOTE 1: Please abide by the [Contributing Guidelines](https://github.com/dscnitrourkela/project-unagi/blob/master/CONTRIBUTING.md).

NOTE 2: Please abide by the [Code of Conduct](https://github.com/dscnitrourkela/project-unagi/blob/master/CODE_OF_CONDUCT.md).

### Running the project.

The project uses PNPM and not NPM. It is strictly advised to stick with PNPM for this project to avoid dependency conflicts.

```
## Checkout into the project directory
cd project-unagi

## Install the dependencies
pnpm i

## Run the project
pnpm dev

## Build the project
pnpm build

```

#### Adding ShadCN/UI Components

Following are the commands to add new components from ShadCN/UI

```
## Add a new Component
pnpm dlx shadcn-ui@latest add <component-name>

```

#### Adding/Removing Dependencies

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
pnpm i package_name

## Remove an existing Package
pnpm remove package_name

## Save Package as a Dev Dependency
pnpm i -D package_name
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## DSC NIT Rourkela

[![DSC NIT Rourkela][dsc-nitrourkela]](https://dscnitrourkela.org)

## Starware

dscnitrourkela/project-unagi is Starware.
This means you're free to use the project, as long as you star its GitHub repository.
Your appreciation makes us grow and glow up. ⭐

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dscnitrourkela/project-unagi?style=for-the-badge
[contributors-url]: https://github.com/dscnitrourkela/project-unagi/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dscnitrourkela/project-unagi?style=for-the-badge
[forks-url]: https://github.com/dscnitrourkela/project-unagi/network/members
[stars-shield]: https://img.shields.io/github/stars/dscnitrourkela/project-unagi?style=for-the-badge
[stars-url]: https://github.com/dscnitrourkela/project-unagi/stargazers
[issues-shield]: https://img.shields.io/github/issues/dscnitrourkela/project-unagi?style=for-the-badge
[issues-url]: https://github.com/dscnitrourkela/project-unagi/issues
[license-shield]: https://img.shields.io/github/license/dscnitrourkela/project-unagi?style=for-the-badge
[license-url]: https://github.com/dscnitrourkela/project-unagi/blob/main/LICENSE
[product-screenshot]: images/Compose.png
[dsc-nitrourkela]: images/repoCover.png

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ashishpadhy.live"><img src="https://avatars.githubusercontent.com/u/100484401?v=4?s=100" width="100px;" alt="Ashish Padhy"/><br /><sub><b>Ashish Padhy</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=Shurtu-gal" title="Code">💻</a> <a href="#projectManagement-Shurtu-gal" title="Project Management">📆</a> <a href="https://github.com/dscnitrourkela/project-udon/commits?author=Shurtu-gal" title="Tests">⚠️</a> <a href="#maintenance-Shurtu-gal" title="Maintenance">🚧</a> <a href="#infra-Shurtu-gal" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/starkjay21"><img src="https://avatars.githubusercontent.com/u/100998898?v=4?s=100" width="100px;" alt="Jayesh Nayak"/><br /><sub><b>Jayesh Nayak</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=starkjay21" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/anmol5936"><img src="https://avatars.githubusercontent.com/u/127973342?v=4?s=100" width="100px;" alt="anmol5936"/><br /><sub><b>anmol5936</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=anmol5936" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Mixel2004"><img src="https://avatars.githubusercontent.com/u/84668201?v=4?s=100" width="100px;" alt="Mixel2004"/><br /><sub><b>Mixel2004</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=Mixel2004" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ashutoshrath.vercel.app/"><img src="https://avatars.githubusercontent.com/u/85403534?v=4?s=100" width="100px;" alt="Ashutosh Rath"/><br /><sub><b>Ashutosh Rath</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=ashutosh-rath02" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://linktr.ee/m_srishty"><img src="https://avatars.githubusercontent.com/u/68679980?v=4?s=100" width="100px;" alt="Srishty Mangutte"/><br /><sub><b>Srishty Mangutte</b></sub></a><br /><a href="https://github.com/dscnitrourkela/project-udon/commits?author=Srish-ty" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
