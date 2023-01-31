/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/getting-started',
        {'Quick Links' : [
            { type: 'doc', id: 'overview/tokenomics/creating-a-near-wallet'},
            { type: 'doc', id: 'governance/dao-guide/how-to-launch-a-dao'},
            { type: 'doc', id: 'overview/tokenomics/nfts-on-near'},
          ]
        },
        'overview/essential-tools',
        {'Tokenomics' : [
          {type: 'autogenerated', dirName: 'overview/tokenomics'},        
          ]
        },
        'overview/faq',
        'overview/glossary',
        'overview/research',
      ]
    },
    {
      type: 'category', 
      label: 'Ecosystem', 
      items: [
        { type: 'autogenerated', dirName: 'ecosystem' },
      ],
    },
    {
      type: 'category', 
      label: 'Governance', 
      items: [
        {type: 'autogenerated', dirName: 'governance'},
      ],
    },
    {
      type: 'category', 
      label: 'Development', 
      items: [
        {type: 'autogenerated', dirName: 'development'},
      ],
    },
    {
      type: 'category', 
      label: 'Support', 
      items: [
        {type: 'autogenerated', dirName: 'support'},
      ],
    },
    {
      type: 'category', 
      label: 'Contribution', 
      items: [
        {type: 'autogenerated', dirName: 'contribute'},
      ],
    },
  ],

  // But you can create a sidebar manually
  
  // quicklinksSidebar: [
  //   {
  //     type: 'link',
  //     label: 'creating-a-near-wallet', // The link label
  //     href: 'overview/tokenomics/creating-a-near-wallet', // The internal path
  //   },
  // ],

};

module.exports = sidebars;
