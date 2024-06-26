import Link from "next/link";
import Text from "./text";
export default function BigCta({
  heading,
  paragraph,
  btn1_text,
  btn1_url,
  btn2_text,
  btn2_url,
}) {
  return (
    <section className="cta_big_sec">
      <div className="contain">
        <div className="cntnt">
          <div className="sec_heading text-center">
            <h2>
              <Text string={heading} />
            </h2>
            <Text string={paragraph} />
          </div>
          <div className="btn_blk text-center">
            <Link href={btn1_url} className="site_btn">
              <Text string={btn1_text} />
            </Link>
            <Link href={btn2_url} className="site_btn color">
              <Text string={btn2_text} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
