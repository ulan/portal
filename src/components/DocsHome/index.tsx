import Link from "@docusaurus/Link";
import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LinkArrowRight from "../Common/Icons/LinkArrowRight";
import { NetworkStats } from "./NetworkStats";
import GuidesIcon from "./guides.svg";
import TutorialsIcon from "./tutorials.svg";
import Blog from "./Blog";
import { TeaserCarousel } from "@site/src/components/DocsHome/TeaserCarousel";

const queryClient = new QueryClient();

const links = [
  {
    label: "Events & News",
    href: "https://dfinity.org/events-and-news/",
  },
  {
    label: "Technical Working Groups",
    href: "https://forum.dfinity.org/t/announcing-technical-working-groups/11781",
  },
  { label: "Join the Dev Forum", href: "https://forum.dfinity.org" },
  { label: "Dev Discord Office Hours", href: "https://discord.gg/jnjVVQaE2C" },
  {
    label: "Developer Grants and Bounties",
    href: "https://dfinity.org/grants/",
  },
  { label: "Bug Bounty Program", href: "https://dfinity.org/bug-bounty/" },
];

const DocsHomePage: FC = () => {
  return (
    <div className="mt-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="px-8 py-10 md:p-10 rounded-lg bg-infinite text-white sm:col-span-2 md:row-span-2 bg-[url(/img/docs/hero-bg.webp)] bg-center bg-cover flex flex-col">
          <h1 className="tw-heading-3 sm:tw-heading-60 md:tw-heading-2 mb-14">
            Developer Docs
          </h1>
          <p className="tw-lead mb-20 flex-1">
            Start a DAO, create a token, build dapps and host assets with the
            full tech stack entirely 100% on chain.
          </p>
          <div className={"flex flex-row gap-2 flex-wrap"}>
            <p className="mb-0">
              <Link
                className="button-white button-with-icon"
                href="/docs/current/developer-docs/"
              >
                Start building
                <LinkArrowRight />
              </Link>
            </p>
          </div>
        </div>
        <div className="px-6 py-8 md:p-10 border border-white border-solid rounded-lg bg-white/70 sm:col-span-2">
          <QueryClientProvider client={queryClient}>
            <NetworkStats></NetworkStats>
          </QueryClientProvider>
        </div>
        <div className="sm:col-span-2 md:h-96">
          <TeaserCarousel />
        </div>
      </section>
      <section className="mt-10">
        <div
          className="
          py-8 sm:p-10 border border-white border-solid rounded-lg bg-white/70
          grid 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-6 
          px-0
          pb-5 sm:pb-10
        "
        >
          <div className="border-0 border-b sm:border-b-0 md:border-r border-solid border-black/10 mx-6 sm:mx-0 md:pr-8 flex flex-col sm:flex-row md:flex-col sm:col-span-2 md:col-span-1 pb-10 sm:pb-10 md:pb-0">
            <div className="h-[100px] md:h-[200px] flex-1">
              <h3 className="tw-heading-6 mb-10 sm:mb-0">
                Programming
                <br />
                Languages
              </h3>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="tw-paragraph text-black/80 mb-6 flex-1">
                Whether you're new to coding or an experienced developer, our
                documentation portal has everything you need. We provide
                easy-to-follow guides, tutorials, code samples, and API
                references for multiple languages like JavaScript, Python, Java,
                Go, Rust, C++ and more.
              </p>
              <p className="mb-0">
                <Link
                  href="/docs/current/developer-docs/backend/choosing-language"
                  className="link-primary link-with-icon"
                >
                  View all <LinkArrowRight />
                </Link>
              </p>
            </div>
          </div>
          <div className="snap-x flex sm:contents overflow-auto scroll-m-10 pb-5 border-0  border-solid border-black/10 docs-home-languages-scrollbar">
            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 border-r sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-0 sm:pr-8 md:px-6 pt-10 sm:pb-10 md:pb-0 md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/motoko.png"
                  alt="Motoko docs"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">Motoko</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Get started with a high level programming language designed
                  specifically for the Internet Computer
                </p>
                <p className="mb-0">
                  <Link
                    href="/docs/current/motoko/main/motoko"
                    className="link-primary"
                    title="Go to Motoko docs"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          
            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 border-r sm:border-r-0 md:border-r sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-8 sm:pr-0 md:px-6 pt-10 sm:pb-10 md:pb-0 md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/rust.png"
                  alt="Rust docs for the Internet Computer"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">Rust</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Use Rust - a high performance and safe programming language to
                  build high efficiency apps on Internet Computer
                </p>
                <p className="mb-0">
                  <Link
                    href="/docs/current/developer-docs/backend/rust/"
                    className="link-primary"
                    title="Go to Rust docs"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>
            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 border-r sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-0 sm:pr-8 md:px-6 pt-10  md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/typescript.png"
                  alt="TypeScript docs for the Internet Computer"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">TypeScript</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Azle allows you to build Internet Computer apps using
                  TypeScript and JavaScript, the languages of the web
                </p>
                <p className="mb-0">
                  <Link
                    href="https://demergent-labs.github.io/azle"
                    className="link-primary"
                    title="Go to Azle docs"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>
            
            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-8 sm:pr-0 md:px-6 pt-10  md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/python.png"
                  alt="Python docs for the Internet Computer"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">Python</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Kybra allows you to build Internet Computer apps using Python,
                  one of the most popular languages in the world
                </p>
                <p className="mb-0">
                  <Link
                    href="https://demergent-labs.github.io/kybra"
                    className="link-primary"
                    title="Go to Kybra docs"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>

            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 border-r sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-0 sm:pr-8 md:px-6 pt-10 sm:pb-10 md:pb-0 md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/solidity.png"
                  alt="Motoko docs"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">Solidity</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Bitfinity allows you to deploy smart contracts on the Internet
                  Computer written in Solidity, a popular language for DeFi
                  applications.
                </p>
                <p className="mb-0">
                  <Link
                    href="/docs/current/developer-docs/backend/solidity/"
                    className="link-primary"
                    title="Go to Solidity"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div
          className="
          py-8 sm:p-10 border border-white border-solid rounded-lg bg-white/70
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-6
          px-0
          pb-5 sm:pb-10
        "
        >
          <div className="border-0 border-b sm:border-b-0 md:border-r border-solid border-black/10 mx-6 sm:mx-0 md:pr-8 flex flex-col sm:flex-row md:flex-col sm:col-span-2 md:col-span-1 pb-10 sm:pb-10 md:pb-0">
            <div className="h-[100px] md:h-[200px] flex-1">
              <h3 className="tw-heading-6 mb-10 sm:mb-0">
                Quick Start
                <br />
                Guides
              </h3>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="tw-paragraph text-black/80 mb-6 flex-1">
                If you're a seasoned developer looking to deploy code on ICP, 
                getting started is easy. Our developer Quick Start guides are designed 
                to jumpstart your developer experience on the Internet Computer Protocol
                using your preferred programming language.
              </p>
              <p className="mb-0">
                <Link
                  href="/docs/current/developer-docs/backend/choosing-language"
                  className="link-primary link-with-icon"
                >
                  View all <LinkArrowRight />
                </Link>
              </p>
            </div>
          </div>
          <div className="snap-x flex sm:contents overflow-auto scroll-m-10 pb-5 border-0  border-solid border-black/10 docs-home-languages-scrollbar">
            <div className="snap-center min-w-[80vw] sm:min-w-0 border-0 border-r sm:border-t md:border-t-0 border-solid border-black/10 px-6 sm:pl-0 sm:pr-8 md:px-6 pt-10 sm:pb-10 md:pb-0 md:pt-0 flex flex-col">
              <div className="mb-16 md:mb-0 md:h-[200px]">
                <img
                  src="/img/docs/react.svg"
                  alt="React quick start"
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="tw-heading-5 mb-6">React</h4>
                <p className="tw-paragraph text-black/80 mb-6 flex-1">
                  Start here if you're coming to the Internet Computer Protocol
                  as a React developer.
                </p>
                <p className="mb-0">
                  <Link
                    href="/docs/current/developer-docs/setup/react-quickstart"
                    className="link-primary"
                    title="Go to Quickstart for React Devs"
                  >
                    <LinkArrowRight />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <Blog></Blog>
      </section>

      <section className="bg-infinite -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-[-50px] md:px-[50px] text-white py-10 mt-20 md:pt-14 md:pb-20">
        <div className=" bg-gradient-to-r from-[#6A85F199] to-[#C572EF99] rounded-lg px-6 py-8 md:p-8 flex flex-col md:flex-row gap-20">
          <div className="md:flex-[4] md:flex md:flex-col items-start">
            <div className="tw-heading-6 mb-10">
              Contribute to the
              <br />
              Internet Computer
            </div>
            <h2 className="tw-heading-3 mb-4 sm:w-5/10 md:w-8/10">
              Help us make the docs better
            </h2>
            <p className="tw-paragraph mb-10 sm:w-6/10 md:w-8/10 md:flex-1">
              These docs are a community effort. Create a PR if you see
              mistakes, room for improvement, or new opportunities to help IC
              developers.
            </p>
            <Link
              href="https://github.com/dfinity/portal"
              className="button-outline-white"
            >
              Contribute
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:flex-[5]">
            {links.map(({ label, href }) => (
              <Link
                className="px-8 py-6 bg-infinite/60 text-white tw-heading-6 flex justify-between items-center gap-4 border border-solid border-[#672AE999] rounded-lg hover:opacity-80 hover:text-white hover:no-underline"
                href={href}
                key={label}
              >
                {label}
                <LinkArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsHomePage;
