import React, { useState } from 'react';
import PageTitle from '../Components/PageTitle';

const Notice = () => {
  const notices = [
    { id: 1, title: '자 오늘의 점심 메뉴 공지에요', date: '2023-08-01', content: '오늘의 점심메뉴는 파스타와 샐러드 조합입니다. 신선한 야채와 고소한 드레싱이 어우러진 샐러드는 건강을 챙기기에 좋고, 풍부한 소스로 풍미를 더한 파스타는 입맛을 만족시켜 줄 것입니다. 메뉴 선택에 고민이 되신다면 이 조합을 추천드립니다. 맛있는 한 끼 식사를 즐기세요!' },
    { id: 2, title: '휴가 일정 공유 입니다', date: '2023-08-05', content: '휴가 일정은...' },
    { id: 3, title: '텃밭에서 황금호박을 찾아라 이벤트 당첨자 입니다', date: '2023-08-10', content: '이벤트 당첨자는...' },
  ];

  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  return (
    <>
      <PageTitle name={'공지사항'} num={1}/>
      <div className="notice-container">
        <h2>공지사항</h2>
        <table className="notice-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>
                  <button onClick={() => handleNoticeClick(notice)}>
                    {notice.title}
                  </button>
                </td>
                <td>{notice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedNotice && (
        <div className="selected-notice">
          <h2>{selectedNotice.title}</h2>
          <p>{selectedNotice.content}</p>
        </div>
      )}
    </>
  );
};

export default Notice;