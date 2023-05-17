import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CsPolygon1 from './../../../Assets/csPolygon1';
import CsPolygon2 from './../../../Assets/csPolygon2';
import CsPolygon3 from './../../../Assets/csPolygon3';
import CsPolygon4 from './../../../Assets/csPolygon4';
import CsPolygon5 from './../../../Assets/csPolygon5';
import CsPolygon6 from './../../../Assets/csPolygon6';

const cardsToDisplay = [
  {
    icon: <CsPolygon1 />,
    heading: "Smart Contract Writing ",
    desc: "We provide services for writing and deploying smart contracts on various blockchain networks, such as Ethereum, Binance Smart Chain, Polkadot, and more.",

  },
  {
    icon: <CsPolygon2 />,
    heading: "Decentralised Apps ",
    desc: "We develop decentralized applications (DApps) that run on blockchain networks, enabling you to create applications that are transparent, secure, and censorship-resistant.",

  },
  {
    icon: <CsPolygon3 />,
    heading: "ERC20",
    desc: "We provide ERC-20 token development services, enabling you to create custom tokens that can be used for various purposes, such as crowdfunding, loyalty programs, or digital assets.",

  },
  {
    icon: <CsPolygon4 />,
    heading: "NFTS ",
    desc: "We provide non-fungible token (NFT) development services, enabling you to create unique digital assets that can be used for various purposes, such as digital art, gaming assets, or collectibles.",

  },
  {
    icon: <CsPolygon5 />,
    heading: "Audit ",
    desc: "Our auditing service helps you identify potential vulnerabilities and security risks in your blockchain-based applications and smart contracts. Our team ensures that the NFT meets industry standards and is compatible with various blockchain networks.",

  },
  {
    icon: <CsPolygon6 />,
    heading: "Web & Mobile Apps",
    desc: "We provide web and mobile app development services that integrate with blockchain technology, enabling you to create applications that leverage the benefits of blockchain, such as immutability, transparency, and security.",

  },
  
]

const ServicesSection = () => {

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const typo1 = { font: 'Archivo', fontWeight: 'bold', fontSize: '20px', color: '#1E293B', lineHeight: "20px", marginBottom: '8px', }


  return (
    <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center' }}>
      {cardsToDisplay.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: 'grid', justifyItems: 'center' }} key={index}>
          <Paper
            style={{
              maxWidth: '625px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '24px',
              backgroundColor: hoveredIndex === index ? '#06B6D4' : ' #F8FAFC',
              border: '1px solid #E2E8F0',
              boxShadow: 'none',
              borderRadius: '16px'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.icon}
            <Typography
              style={{
                ...typo1,
                color: hoveredIndex === index ? 'white' : '#1F2937',
                textAlign: 'center'
              }}
              marginTop={'16px'}
            >
              {data.heading}
            </Typography>
            <Typography
              style={{
                font: 'Archivo',
                fontWeight: '400px',
                fontSize: '16px',
                color: hoveredIndex === index ? 'white' : '#4B5563',
                lineHeight: '24px',
                textAlign: 'center'
              }}
            >
              {data.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default ServicesSection