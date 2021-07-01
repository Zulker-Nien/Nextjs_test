//domain.com/news
import { Fragment } from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/ZulkerIsTesting">
              Linking between page test.
          </Link>
        </li>
        <li>New link</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
