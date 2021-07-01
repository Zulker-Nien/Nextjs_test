//domain.com/news
import { useRouter } from "next/router";

function NewsPage() {
  
    const router = useRouter();

    const newsID = router.query.newsid;

    // Send a request to the backend API
    // to fetch the news item with NEWSID
    return <h1>Something</h1>;
}

export default NewsPage;
