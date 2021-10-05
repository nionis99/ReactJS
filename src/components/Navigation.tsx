import React from 'react';

const defaultTabClassName =
  'text-white p-5 cursor-pointer block hover:text-primary focus:outline-none transform uppercase font-medium';

// TODO : Nav links || Filtering
const NavigationTabs = () => (
  <nav className="flex flex-row">
    {/*Active*/}
    <span className={`${defaultTabClassName} border-b-2 border-primary`}>All</span>
    <span className={defaultTabClassName}>Documentary</span>
    <span className={defaultTabClassName}>Comedy</span>
    <span className={defaultTabClassName}>Horror</span>
    <span className={defaultTabClassName}>Crime</span>
  </nav>
);

export default NavigationTabs;
