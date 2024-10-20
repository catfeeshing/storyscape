export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "storyscape",
  description: "a website that helps kids learn how to read",
  navItems: [
    {
      label: "Learn",
      href: "/levels",
    },
    {
      label: "My Shelf",
      href: "/shelf",
    },

  ],
  navMenuItems: [
    {
      label: "Learn",
      href: "/levels",
    },
    {
      label: "login",
      href: "/login",
    },
    {
      label: "My Shelf",
      href: "/shelf",
    },

  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
