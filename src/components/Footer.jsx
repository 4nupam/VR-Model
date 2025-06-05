import { resourcesLinks, platformLinks, communityLinks } from "../constants";

/**
 * Footer Component
 *
 * Renders the bottom section of the webpage which contains
 * navigation links grouped under three main categories:
 * Resources, Platform, and Community.
 */
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      {/* Responsive grid layout: 2 columns on small screens, 3 on large screens */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Resources Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
