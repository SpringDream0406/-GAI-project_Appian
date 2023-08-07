// Community.js
import React from 'react';
import { Link} from 'react-router-dom';

function Community() {



  const YoutubeTitle =["상추 오래 따먹는 3가지 방법 " ,"대파 심는법 2가지? "
                         , "옥수수 심고 딱 3가지만 해주세요" , "감자심는시기 감자심는방법"]
  const Youtuber =["텃밭연구소" ,"솔바위 농원"
                , "숨비재제주농부" , "진미농원TV"]
                         
  return (
    
    <div className='infopage'>
      <div>
        <span className='infotitle'>팜팜! 정보 게시판</span>
        <hr className='infohr'/>
        <img src='/img/titlebg.png' className='infotitle_bg'/>
      </div>

      
      <span className='infotitle2'> ▶ 영상으로 배우는 농사이야기</span>
      <hr className='infohr2'/>

      <div className='video1_tag'></div>
      <div className='video2_tag'></div>
      <div className='video3_tag'></div>
      <div className='video4_tag'></div>
      <div className='video5_tag'></div>
      <span className='video1_tagname'>주말 텃밭에 당근 씨앗 심어 수확까지 <br/>:: 당근 재배방법</span>
      <span className='video1_tagsubname'>꼬마농부의 텃밭이야기</span>
      <span className='video1_tagsubname1'>{Youtuber[0]}</span>
      <span className='video1_tagsubname2'>{Youtuber[1]}</span>
      <span className='video1_tagsubname3'>{Youtuber[2]}</span>
      <span className='video1_tagsubname4'>{Youtuber[3]}</span>
      <span className='video1_tagname1'>{YoutubeTitle[0]}</span>
      <span className='video1_tagname2'>{YoutubeTitle[1]}</span>
      <span className='video1_tagname3'>{YoutubeTitle[2]}</span>
      <span className='video1_tagname4'>{YoutubeTitle[3]}</span>
      
      <div className='info-vd-container'>
        <div className='big-video'>
          
          <a href="https://www.youtube.com/watch?v=A2FMU3kArDU">
          
          <img src="img/002.jpg" alt="이미지 3" style={{ width: '580px', height: '330px' }} />
          </a>
        </div>
        <div className='small-video'>
          <div className='video'>
            <a href="https://www.youtube.com/watch?v=-xJZE82dxg4">
            <img src="img/003.jpg" alt="이미지 2" />
            </a>
          </div>
          <div className='video2'>
            <a href="https://www.youtube.com/watch?v=NURb3Ypej6I">
            <img src="img/004.jpg" alt="이미지 3" />
            </a>
          </div>
          <div className='video3'>
            <a href="https://www.youtube.com/watch?v=OSugRMlZxO4">
            <img src="img/005.jpg" alt="이미지 2" />
            </a>
          </div>
          <div className='video4'>
            <a href="https://www.youtube.com/watch?v=cVpMzTdWxxE">
            <img src="img/001.jpg" alt="이미지 3" />
            </a>
          </div>
        </div>
      </div>
      
      

      
      <span className='infotitle3'>▶ 텃밭 이야기</span>
      <hr className='infohr3'/>
      <div className='infoimg2' >
      <Link to={'/cone'}>
        <img src="img/one.jpg" alt="이미지 1" className='infostoryimg' />
      </Link>
      <Link to={'/ctwo'}>
        <img src="img/two.jpg" alt="이미지 2" className='infostoryimg' />
      </Link>
      <Link to={'/cthree'}>  
        <img src="img/three.jpg" alt="이미지 3"className='infostoryimg' />
      </Link>
      </div>
      </div>
      
        
  );
}

export default Community;