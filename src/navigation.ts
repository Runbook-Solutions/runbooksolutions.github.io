import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        {
          text: 'Group Policy',
          href: getPermalink('/solutions#group-policy'),
        },
        {
          text: 'Microsoft Intune',
          href: getPermalink('/solutions#intune'),
        },
        {
          text: 'Entra ID',
          href: getPermalink('/solutions#entra'),
        },
        {
          text: 'Endpoint Security',
          href: getPermalink('/solutions#endpoint-security'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Group Policy', href: getPermalink('/solutions#group-policy') },
        { text: 'Microsoft Intune', href: getPermalink('/solutions#intune') },
        { text: 'Entra ID', href: getPermalink('/solutions#entra') },
        { text: 'Endpoint Security', href: getPermalink('/solutions#endpoint-security') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/runbooksolutions' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/runbooksolutions' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@runbooksolutions.com' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Runbook Solutions LLC. All rights reserved.
  `,
};
