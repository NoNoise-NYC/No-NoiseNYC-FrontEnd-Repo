import PropTypes from 'prop-types';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../../src/utils/get-mardown/marketing/case-studies';
// _data

// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
// import { PricingMarketing } from '../../src/sections/pricing';
// import { TeamMarketingLangding } from '../../src/sections/team';
// import { BlogMarketingLatestPosts } from '../../src/sections/blog';
// import { NewsletterMarketing } from '../../src/sections/newsletter';
// import { TestimonialsMarketing } from '../../src/sections/testimonials';

import {
 
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices

} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts, caseStudies }) {
  return (
    <Page title="Landing - Marketing">
      <MarketingLandingHero />

     

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

    

     
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}
