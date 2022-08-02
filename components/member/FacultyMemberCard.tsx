import { FC } from 'react';
function FacultyMemberCard(item) {
  const fac = item.item;
  return (
    <div className="bg-white p-4">
      <a href={`/member/faculty/${fac.id}`}>
        <img src={fac.profileImage?.sourceUrl || ""} className="w-full" />
        <div className="mt-4">
          <h3>Associate Professor</h3>
          <h3>{fac.fullNameEn}</h3>
          <h3>{fac.adminPositionEn}</h3>
          {fac.email.map((el) =>(
           <p>{el}</p>
          ))}
          {fac.phone.map((el) =>(
           <p>{el}</p>
          ))}
        </div>
      </a>
    </div>
  );
}

export default FacultyMemberCard;
