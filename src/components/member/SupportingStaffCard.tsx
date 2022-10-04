import Link from 'next/link';
function SupportingStaffCard() {
  return (
    <div className='bg-white p-4'>
      <Link href='/member/staff/1'>
        <a>
          {/* <img src="/demo/member/29-WN.png" className="w-full" /> */}
          <div className='mt-4'>
            <h3>Wuttinun Inthayot</h3>
            <h3>Position: Operational staff training</h3>
            <p>iecmu@hotmail.com</p>
            <p>053-944125, 053-944183,053-944126 ต่อ 103</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default SupportingStaffCard;