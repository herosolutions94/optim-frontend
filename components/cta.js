import Link from "next/link";
import Text from "./text";
export default function Cta({ heading, paragraph, btn1_text, btn1_url }) {
  return (
    <div className="cta_flex">
      <div className="sec_heading">
        <h2>
          <Text string={heading} />
        </h2>
        <Text string={paragraph} />
      </div>
      <div className="btn_blk text-right">
        <Link href={btn1_url} className="site_btn dim">
          <Text string={btn1_text} />
        </Link>
      </div>
    </div>
  );
}
