import Landing from '../../components/landing';

// Landing products and services
import Academy from '../../components/landing/academy'
import Deepweb from '../../components/landing/deepweb'
import Kildstress from '../../components/landing/kildstress'
import Pentesting from '../../components/landing/pentesting'
import Phishing from '../../components/landing/phishing'
import Vulnerability from '../../components/landing/vulnerability'

// Landing sectors
import Financial from '../../components/sectors/financial'
import TI from '../../components/sectors/ti'
import Entertaiment from '../../components/sectors/entertainment'
import PublicGovernment from '../../components/sectors/public-government'
import Educational from '../../components/sectors/educational'

export const PublicRoutes = [
  {
    path: '',
    component: Landing,
    props: true,
    name: 'Landing',
  },
  {
    path: 'academy',
    component: Academy,
    props: true,
    name: 'Academy'
  },
  {
    path: 'deepweb',
    component: Deepweb,
    props: true,
    name: 'Deepweb'
  },
  {
    path: 'kildstress',
    component: Kildstress,
    props: true,
    name: 'kildstress'
  },
  {
    path: 'pentesting',
    component: Pentesting,
    props: true,
    name: 'Pentesting'
  },
  {
    path: 'phishing',
    component: Phishing,
    props: true,
    name: 'Phishing'
  },
  {
    path: 'vulnerability',
    component: Vulnerability,
    props: true,
    name: 'Vulnerability'
  },
  {
    path: 'financial',
    component: Financial,
    props: true,
    name: 'Financial'
  },
  {
    path: 'entertaiment',
    component: Entertaiment,
    props: true,
    name: 'Entertaiment'
  },
  {
    path: 'ti',
    component: TI,
    props: true,
    name: 'TI'
  },
  {
    path: 'public-government',
    component: PublicGovernment,
    props: true,
    name: 'PublicGovernment'
  },
  {
    path: 'educational',
    component: Educational,
    props: true,
    name: 'Educational'
  },
  // keep this line last to redirect all invalid URLs to the landing
  { path: '*', redirect: { name: 'Landing' }}
];