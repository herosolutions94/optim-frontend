import Link from 'next/link'
export default function BigCta() {
    return (
        <section className="cta_big_sec">
            <div className="contain">
                <div className="cntnt">
                <div className="sec_heading text-center">
                    <h2>Ready to Optimize Your Pricing?</h2>
                    <p>Sign up today and start leveraging our AI-driven solutions to boost your gas station's performance.</p>
                </div>
                <div className="btn_blk text-center">
                    <Link href="/signup" className="site_btn">Sign Up Now</Link>
                    <Link href="/pricing" className="site_btn color">View Pricing</Link>
                </div>
                </div>
            </div>
        </section>
    );
}