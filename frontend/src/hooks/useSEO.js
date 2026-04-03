import { useEffect } from 'react';

const SITE_NAME = 'Instant Catering Services Ltd';
const DEFAULT_DESCRIPTION =
  "Nigeria's premier in-flight catering company delivering gourmet meals, seamless logistics, and unmatched service to airlines and passengers since 2014.";
const DEFAULT_KEYWORDS =
  'in-flight catering Nigeria, aviation catering Abuja, airline meals, halal catering, instant catering services';

/**
 * Updates document <title> and key meta tags on a per-page basis.
 * @param {object} params
 * @param {string} [params.title]       - Page-specific title (appended with site name)
 * @param {string} [params.description] - Meta description for this page
 * @param {string} [params.keywords]    - Meta keywords for this page
 */
const useSEO = ({ title, description, keywords } = {}) => {
  useEffect(() => {
    // Title
    document.title = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Premium In-Flight Catering Nigeria`;

    // Description
    const setMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el && content) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]',          description || DEFAULT_DESCRIPTION);
    setMeta('meta[name="keywords"]',             keywords    || DEFAULT_KEYWORDS);
    setMeta('meta[property="og:title"]',         document.title);
    setMeta('meta[property="og:description"]',   description || DEFAULT_DESCRIPTION);
    setMeta('meta[name="twitter:title"]',        document.title);
    setMeta('meta[name="twitter:description"]',  description || DEFAULT_DESCRIPTION);
  }, [title, description, keywords]);
};

export default useSEO;
