import Link from 'next/link'
export default function Cta() {
    return (
      <div className='cta_flex'>
        <div className='sec_heading'>
            <h2>Ready to Optimize Your Pricing?</h2>
            <p>Sign up today and start leveraging our AI-driven solutions to boost your gas station's profitability.</p>
        </div>
        <div className='btn_blk text-right'>
            <Link href="/signup" className='site_btn dim'>Sign Up Now</Link>
        </div>
      </div>
    );
}