import React from 'react'
import { useState, useEffect } from 'react';
import '../Css/GetAddress.css';
import MapArea from './MapArea'
import Card from './Card';
import axios from 'axios';


const GetAddress = () => {

  const sidos = [
    {
      name: '광주광역시',
      sigungus : [
        { name : '광산구'}, 
        { name : '동구'},
        { name : '서구'},
        { name : '남구'},
        { name : '북구'}]
    },
    {
      name: '전라남도',
      sigungus : [
        { name : '나주시'}, 
        { name : '목포시'},
        { name : '여수시'},
        { name : '순천시'},
        { name : '광양시'},
        { name : '화순군'},
        { name : '장성군'}]
    }
  ];

  const [data, setData] = useState([]);



  const [sido, setSido] = useState(['시/도 선택']);
  const [sigungu, setSigungu] = useState(['시/군/구 선택']);
  const [sigungus, setSigungus] = useState(['광산구']);

  console.log('key:', sido, sigungu)
  
  
  const changeSido = (event)=>{
    setSido(event.target.value);
    const siItem = sidos.find((item)=> item.name === event.target.value);
    return setSigungus(siItem.sigungus);
  }

  const changeSigungu = (event)=>{
    setSigungu(event.target.value);
  }

  useEffect(() => {
    // Flask 서버의 주소
    const apiUrl = 'http://192.168.70.147:5022/farm';

    // Axios를 사용하여 GET 요청 보내기
    axios.get(apiUrl, { responseType: 'json', params: { sido : sido, sigungu : sigungu }, })
      .then(response => {
        setData(response.data);
        console.log('db로부터받음', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [sigungu]);
 

  return (
    
    <div className='form'>
      <select className='form-control' value={sido} onChange={changeSido}>
        <option>시/도 선택</option>
        {sidos.map(item=>(
          <option value={item.name}>{item.name}</option>
        ))}

      </select>
      <select className='form-control' value={sigungu} onChange={changeSigungu}>
        <option>시/군/구 선택</option>
        {sigungus.map(item=>(
          <option value={item.name}>{item.name}</option>
        ))}

      </select>
      {console.log('보낼값:',data)}
      <MapArea list={data}/>
      <Card list={data} />
    </div>
    
  )
}

export default GetAddress