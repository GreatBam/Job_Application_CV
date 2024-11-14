/**
 *
 * @file: Home page
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import Sidebar from "./_components/sidebar";
import Content from "./_components/content";

export default function Home() {
  return (
    <div className="flex print-wrapper">
      <Sidebar />
      <Content />
    </div>
  );
}
