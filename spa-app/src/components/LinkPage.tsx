import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

/**
 * This is a utility page used for client-side redirects, in order to bypass URL rewrites in the vercel.json config.
 * For example, if `example.com/products/1` is rewritten, we can instead use `example.com/link?url=/product/1` to bypass
 * the rewrite and navigate to the correct page.
 */
const LinkPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const targetUrl = params.get("url");

  useEffect(() => {
    if (targetUrl) {
      navigate(targetUrl, { replace: true });
    }
  }, [targetUrl]);

  return null;
};

export default LinkPage;
