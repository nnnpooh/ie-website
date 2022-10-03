import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
function FacultyMemberCard(item) {
  const fac = item.item;
  return (
    <div className="flex flex-col bg-white p-4">
      <Link href={`/member/faculty/${fac.id}`}>
        <a className="relative h-60">
          <Image
            src={fac.profileImage?.sourceUrl || ""}
            layout="fill"
            objectFit="contain"
            alt="..."
          />
        </a>
      </Link>
      <div className="mt-4">
        <h3>Associate Professor</h3>
        <h3>{fac.fullNameEn}</h3>
        <h3>{fac.adminPositionEn}</h3>
        {/* {fac.email.map((el) => (
          <p>{el}</p>
        ))}
        {fac.phone.map((el) => (
          <p>{el}</p>
        ))} */}
      </div>
    </div>
  );
}

export default FacultyMemberCard;
